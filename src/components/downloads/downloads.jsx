import "./downloads.css";
import { KeyboardArrowDown } from "@mui/icons-material";
import Vector from "./Vector.png";
import VectorRight from "./Vector1.png";
import Layer10 from "./Layer10.png";
import Layer4 from "./Layer4.png";

const downloads = () => {
  return (
    <div className="downloads">
      <div className="downloads-orange-section">
        <img src={Layer10} className="layer-image" alt="" />
        <img src={Layer4} className="layer-image2" alt="" />
        <img src={Vector} className="downloads-vector-left" alt="" />
        <img src={VectorRight} className="downloads-vector-right" alt="" />
        <div className="downloads-content">
          <h1>20M+ downloaded from 32 diffrent countires</h1>
          <p>Try demo for 7 days with full features.</p>
          <button>
            Try free demo <KeyboardArrowDown fontSize="large" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default downloads;
