import "./overview.css";
import image from "./Image.png";
import facebook from "./facebook.png";
import google from "./google.png";
import coca_cola from "./coca_cola.png";
import linkedIn from "./linkedIn.png";
import samsung from "./samsung.png";
import Vector from "./Vector.png";
import VectorRight from "./Vector1.png";

const overview = () => {
  return (
    <div className="overview">
      <div className="orange-section">
        <img src={image} className="overview-image" alt="" />
        <img src={Vector} className="vector-left" alt="" />
        <img src={VectorRight} className="vector-right" alt="" />
      </div>
      <div className="white-section">
        <img src={facebook} alt="" />
        <img src={google} alt="" />
        <img src={coca_cola} alt="" />
        <img src={linkedIn} alt="" />
        <img src={samsung} alt="" />
      </div>
    </div>
  );
};

export default overview;
