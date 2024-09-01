import image from "./Image.png";
import { East } from "@mui/icons-material";

const anytime = () => {
  return (
    <div
      className="sm:mb-28 mb-16 w-[93%] sm:w-[80%] lg:w-[85%] xl:w-[1109px] 2xl:w-[90%] m-auto 
      flex flex-col justify-between sm:flex-row xl:mt-12 md:mt-5 sm:mt-8 mt-2 items-center"
    >
      <div className="anytime-text-section lg:mt-2 md:mt-1 lg:w-[380px] md:w-[317px] sm:w-[198px] xl:w-auto sm:text-left text-center">
        <h3
          className="uppercase text-[#bdbdbd] xl:text-2xl lg:text-lg md:text-sm sm:text-xs text-lg
          xl:mt-5 xl:mb-10 sm:mt-3 mt-4 sm:mb-5 mb-6"
        >
          Use anytime
        </h3>
        <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-6xl xl:w-auto text-[#292830] font-bold">
          Use anytime when you need
        </h1>
        <p
          className="
          xl:text-2xl lg:text-lg md:text-sm sm:text-xs text-lg text-[#bdbdbd] 
          xl:mt-5 xl:mb-10 sm:mt-3 mt-4 sm:mb-5 mb-6 hover:text-[#292830] cursor-context-menu"
        >
          Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
          accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget
          ut.
        </p>
        <a href="" className="text-[#ff7235]">
          Learn more <East fontSize="" />
        </a>
      </div>
      <img
        src={image}
        alt=""
        className="xl:h-auto lg:h-96 md:h-56 sm:h-56 sm:m-0 mb-5"
      />
    </div>
  );
};

export default anytime;
