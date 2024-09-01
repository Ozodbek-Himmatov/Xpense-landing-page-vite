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
    <div className="overview flex flex-col">
      <div className="orange-section flex justify-center items-end z-10 pt-14 relative bg-[#ff7235] ">
        <img src={image} className="xl:w-auto sm:w-[85%] w-[90%]" alt="" />
        <img
          src={Vector}
          className="vector-left absolute bottom-0 left-0 -z-10 xl:h-auto sm:h-[70%] h-[0%]"
          alt=""
        />
        <img
          src={VectorRight}
          className="vector-right absolute top-0 right-0 -z-10 xl:h-auto sm:h-[70%] h-[50%]"
          alt=""
        />
      </div>
      <div
        className="
        flex justify-evenly items-center xl:pt-20 xl:pb-16 sm:px-8 md:p-4 xl:px-7 md:pt-16 md:pb-14 sm:pt-12 sm:pb-10 pt-8 pb-6"
      >
        <img
          src={facebook}
          className="xl:w-auto lg:w-32 md:w-24 sm:w-20 w-12"
          alt=""
        />
        <img
          src={google}
          className="xl:w-auto lg:w-32 md:w-24 sm:w-20 w-12"
          alt=""
        />
        <img
          src={coca_cola}
          className="xl:w-auto lg:w-32 md:w-24 sm:w-20 w-12"
          alt=""
        />
        <img
          src={linkedIn}
          className="xl:w-auto lg:w-32 md:w-24 sm:w-20 w-12"
          alt=""
        />
        <img
          src={samsung}
          className="xl:w-auto lg:w-32 md:w-24 sm:w-20 w-12"
          alt=""
        />
      </div>
    </div>
  );
};

export default overview;
