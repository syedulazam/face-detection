import "tachyons";
import "./imageLinkForm.css";

const ImageLinkForm = ({ input, button }) => {
  return (
    <div className="tc styling font">
      <div className="f3">
        <p> The magic brain will detect faces in the iamge. Try it out </p>
      </div>
      <div className="shadow-5 background pa3 w-60 center">
        <input
          className="w-70 f4 pa2 "
          type="text"
          alt="textBot"
          height={10}
          width={50}
          placeholder="Place the link of the image"
          onChange={input}
        />
        <button
          className="w-20 grow f4 ph3 pv2 bg-light-purple"
          onClick={button}
        >
          Detect
        </button>
      </div>
      <p className="tc f4 margin4">
        <b>
          NOTE: You should place a link which doesn't exceed 2000 characters
        </b>
      </p>
    </div>
  );
};

export default ImageLinkForm;
