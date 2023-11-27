import React, { Component } from "react";
import Navigation from "../components/navigation/navigation";
import Logo from "../components/logo/logo";
import ImageLinkForm from "../components/imageLinkForm/imageLinkForm";
import Rank from "../components/rank/rank";
import FaceDetection from "../components/faceDetection/faceDetection";
import Signin from "../components/signin/signin";
import Register from "../components/register/register";
import ParticlesBg from "particles-bg";
import reportWebVitals from "../reportWebVitals";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";

let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: "center", // all or center or {x:1,y:1,width:100,height:100}
  color: ["white"],
  cross: "dead", // cross or bround
  random: 15, // or null,
  g: 5, // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(
      particle.p.x,
      particle.p.y,
      particle.radius * 2,
      particle.radius * 2
    );
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  },
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

const returnClarifaiRequestOptions = (imageUrl) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "2691c44f3b6949d291f8eed3c03df094";
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = "syedul";
  const APP_ID = "face-detection";
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = "face-detection";
  const IMAGE_URL = imageUrl;

  ///////////////////////////////////////////////////////////////////////////////////
  // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
  ///////////////////////////////////////////////////////////////////////////////////

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;

  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: [],
      route: "signin",
      isSignedin: false,
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value }); // We don't write this.state.input in place of input because we used setState.
  };

  faceRecognition = (data1) => {
    const faceBoundary = data1.outputs[0].data.regions.map((dimension) => {
      const clarifaiFace = dimension.region_info.bounding_box;
      const image = document.getElementById("image1");
      const width = image.width;
      const height = image.height;

      return {
        // We are putting {} inside the push method because we are pushing objects. If it was arrays thta we are pushin, then it would be [].
        topRow: clarifaiFace.top_row * height + 670, // This represents the height from the top of the top line of the rectangle, on the face that is going to be displayed, to
        // the top of the image.
        leftCol: clarifaiFace.left_col * width + 530, // This represents the height from the left of the left line of the rectangle, on the face that is going to be displayed, to
        // the left of the image.
        bottomRow: height - clarifaiFace.bottom_row * height - 477, // This represents the height from the bottom of the bottom line of the rectangle, on the face that is going
        // to be displayed, to the bottom of the image.
        rightCol: width - clarifaiFace.right_col * width + 490, // This represents the height from the right of the right line of the rectangle, on the face that is going to be
        // displayed, to the right of the image.
      };
    });
    return faceBoundary;
  };
  // If you are writing the content of faceRecognition function inside  this.displayFaceBox(content); you do not have to use the variable faceBoundary to store the
  // dimension values because what dimension values we return in the displayFaceBox will be used the moment we tap the "detect" button. But that's not the case when we
  // write the content of the faceRecognition in the faceRecognition function itself because we don't be using the dimension values immediately. We will use it only after
  // we tap the button. So that is why we need to store it in a variable (in this case, faceBoundary) and then we can return that stored value to the faceRecognition
  // function.

  displayFaceBox = (rectangles) => {
    this.setState({ box: rectangles });
    console.log(rectangles);
  };

  onButtonChange = () => {
    this.setState({ imageUrl: this.state.input, box: [] }); // We don't write this.state.input in place of input because we used setState.

    fetch(
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",
      returnClarifaiRequestOptions(this.state.input)
    )
      .then((response) => response.json()) // Also, over here, we wrote this.state.input and not this.state.imageUrl becuase we are trying to pass the link of
      // the image as a parameter, which is our request. This request gets converted to JSON form later in the next line
      // of code.
      // .then((response) => console.log(response))
      .then((response) => {
        if (response.outputs[0].data.regions) {
          this.displayFaceBox(this.faceRecognition(response));
        } else {
          this.displayFaceBox([]);
        }
      })
      .catch((err) => console.log(err));
  };

  routeChange = (choose) => {
    // if (choose === "home") {
    //   this.setState({ isSigned: true });
    // } else {
    //   this.setState({ isSigned: false });
    // }
    this.setState({ route: choose });
  };

  render() {
    return (
      <div>
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation
          onRouteChange={this.routeChange}
          // isSigned={this.state.isSigned}
          onRoute={this.state.route}
        />
        {this.state.route == "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              input={this.onInputChange}
              button={this.onButtonChange}
            />
            <FaceDetection
              boxes={this.state.box}
              imageUrl={this.state.imageUrl}
            />
          </div>
        ) : this.state.route == "signin" ? (
          <Signin onRouteChange={this.routeChange} onSignin={this.signin} />
        ) : (
          <Register onRouteChange={this.routeChange} />
        )}
        {/* In this render code, we placed another {} to enclose the functions from Signin to FaceDetection. That's because we are using if else statement, which
               in this case is represented by ? and :, where "?" represents the first condition to be activated, and the ":" represents the else condition. */}
      </div>
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;
