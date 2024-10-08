import { East } from "@mui/icons-material";
import illustrator from "/src/assets/cost/Illustrator.png";

const free_cost = () => {
  return (
    <div className="cost bg-[#FFFAF8]">
      <div
        className="cost-banner-section sm:pb-28 pb-16 w-[93%] sm:w-[80%] lg:w-[85%] xl:w-[1109px] m-auto 
      flex flex-col-reverse justify-between sm:flex-row xl:mt-12 md:mt-5 sm:mt-8 mt-2 items-center gap-10"
      >
        <img
          src={illustrator}
          alt=""
          className="xl:h-auto lg:h-96 md:h-56 sm:h-56 sm:m-0 mb-5"
        />
        <div className="cost-text-section cloud-text-section lg:mt-2 md:mt-1 lg:w-[355px] md:w-[276px] sm:w-[198px] xl:w-auto sm:text-left text-center">
          <h3
            className="uppercase text-[#bdbdbd] xl:text-2xl lg:text-lg md:text-sm sm:text-xs text-lg
          xl:mt-5 xl:mb-10 sm:mt-3 mt-4 sm:mb-5 mb-6"
          >
            free some cost
          </h3>
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-5xl xl:w-auto text-[#292830] font-bold">
            Save cost for you and family
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
      </div>
    </div>
  );
};

export default free_cost;
