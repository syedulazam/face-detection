import "tachyons";
import "./rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div className="tc font styling1">
      <div className="f3">
        <p>{`${name}, your current image count is ...`}</p>
      </div>
      <div className="f1">
        <p className="styling2">{`${entries}`}</p>
      </div>
    </div>
  );
};

export default Rank;
