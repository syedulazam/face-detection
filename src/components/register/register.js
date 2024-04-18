import "tachyons";
import "./register.css";
import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitChange = () => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-type": "application/JSON" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          // The purpose of writing user.id instead of user is to ensure that the user fills in all the details and then
          // registers because when we try to register without filling in atleast one of the details, what happens is that,
          // "Incorrect form submission" is considered as the details in place of name, email and password. So that is why i
          // wrote user.id and not user.
          this.props.loadUser(user);
          this.props.onRouteChange("signin");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-2">
        <main className="pa4 black-80 center">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 margin" htmlFor="name">
                  Name
                </label>
                <div className="tc">
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70"
                    type="name"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                    required
                  />
                </div>
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 margin"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <div className="tc">
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    required
                  />
                </div>
              </div>
              <div className="padding"></div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 margin" htmlFor="password">
                  Password
                </label>
                <div className="tc">
                  <input
                    className=" b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </div>
            </fieldset>
            <div className="flex justify-center pa3">
              <input
                onClick={this.onSubmitChange}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <a
              onClick={() => onRouteChange("signin")}
              className="f6 link dim black db tc pointer"
            >
              Already have an account? Signin
            </a>
            <div className="lh-copy mt3"></div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
