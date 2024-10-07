import { KeyboardArrowDown } from "@mui/icons-material";
import Vector from "/src/assets/downloads/Vector.png";
import VectorRight from "/src/assets/downloads/Vector1.png";
import Layer10 from "/src/assets/downloads/Layer10.png";
import Layer4 from "/src/assets/downloads/Layer4.png";

const downloads = () => {
  return (
    <div className="flex flex-col">
      <div
        className="relative bg-[#ff7235] xl:pt-28 lg:pt-24 md:pt-20 sm:pt-16 pt-5 
      xl:pb-80 lg:pb-72 md:pb-60 sm:pb-52 min-[388px]:pb-80 min-[485px]:pb-52 pb-96"
      >
        <img
          src={Layer10}
          className="absolute xl:top-[350px] lg:top-[320px] md:top-[270px] sm:top-[200px] 
          min-[388px]:top-[280px] min-[497px]:top-[220px] top-[340px]
          xl:left-[110px] left-0 lg:left-[80px] md:left-[70px] sm:left-[25px]
          z-10 xl:w-auto lg:w-2/6 md:w-72 sm:w-64 w-60"
          alt=""
        />
        <img
          src={Layer4}
          className="absolute 
          xl:top-[350px] lg:top-[320px] md:top-[270px] sm:top-[200px] 
          top-[500px] min-[375px]:top-[500px] min-[388px]:top-[400px] min-[485px]:top-[280px] min-[497px]:top-[220px]  
          xl:right-[110px] right-2 lg:right-[80px] md:right-[70px] sm:right-[25px] 
          z-10 xl:w-auto lg:w-2/6 md:w-72 sm:w-64 w-60"
          alt=""
        />
        <img
          src={Vector}
          className="absolute left-0 bottom-0 xl:w-auto lg:w-[27%] sm:w-[30%] w-[150px]"
          alt=""
        />
        <img
          src={VectorRight}
          className="absolute top-0 right-0 xl:w-auto lg:w-[27%] sm:w-[30%] w-[150px]"
          alt=""
        />
        <div className="text-center">
          <h1
            className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-5xl text-white text-center font-bold m-auto
          xl:w-[830px] lg:w-[692px] md:w-[554px] sm:w-[415px]"
          >
            20M+ downloaded from 32 diffrent countires
          </h1>
          <p className="text-white font-medium xl:text-4xl lg:text-3xl md:text-2xl lg:mt-6 mt-3">
            Try demo for 7 days with full features.
          </p>
          <button
            className="bg-white text-[#ff7235] rounded-lg lg:text-xl md:text-lg text-xl
          lg:py-3 lg:px-6 md:py-2 md:px-4 sm:px-3 sm:py-1 p-2 xl:mt-16 lg:mt-10 md:mt-8 sm:mt-3 mt-5"
          >
            Try free demo <KeyboardArrowDown fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default downloads;
