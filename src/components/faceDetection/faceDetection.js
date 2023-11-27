import "tachyons";
import "./faceDetection.css";

const FaceDetection = ({ imageUrl, boxes }) => {
  return (
    <div>
      <div className="tc ">
        <img
          id="image1"
          alt="Image"
          src={imageUrl}
          width="500px"
          height="500px"
        />
        {boxes.map((box, index) => (
          <div
            key={index} // We hav used key here in case we have more than one dimension values. index over here represents the index at which the dimension vlaues are.
            // so key in this case are basically 0,1,2 etc. This is used to allow the mapping to start from the first key
            className="bounding-box"
            style={{
              top: box.topRow,
              bottom: box.bottomRow,
              left: box.leftCol,
              right: box.rightCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceDetection;
