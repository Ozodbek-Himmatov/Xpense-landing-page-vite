import "./wishers.css";
import Cards from "./Cards.png";
import Slider from "./Slider.png";

const Wishers = () => {
  return (
    <div className="wishers">
      <div className="wishers_content">
        <h1>We have millions of best wishers</h1>
        <img src={Cards} className="cards" alt="" />
        <img src={Slider} className="slider" alt="" />
      </div>
    </div>
  );
};

export default Wishers;
