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
    <div className="overview flex flex-col w-[100%]">
      <div className="orange-section flex flex-col justify-end z-10 bg-[#ff7235] xl:h-[2000px] lg:h-[800px] md:h-[700px] h-[500px]">
        <img src={image} className="overview-image  bg-black m-auto xl:h-auto w-[80%]" alt="" />
        <img src={Vector} className="vector-left absolute top-full -z-10" alt="" />
        <img src={VectorRight} className="vector-right absolute top-full xl:top-[115%] right-0 -z-10" alt="" />
      </div>
      <div className="white-section flex justify-evenly items-center pt-20 pb-16">
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
