import "tachyons";
import "./logo.css";
import brain from "./brain.png";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6}>
      <div className="ma5">
        <img src={brain} alt="brain" height={120} width={120} />
      </div>
    </Tilt>
  );
};

export default Logo;
