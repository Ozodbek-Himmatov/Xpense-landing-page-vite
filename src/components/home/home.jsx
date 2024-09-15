import Navbar from "../navbar/navbar";
import illustration from "/src/assets/home/Illustration.png";
import { KeyboardArrowDown } from "@mui/icons-material";

const home = () => {
  return (
    <div className="sm:mb-28 w-[93%] sm:w-[80%] lg:w-[85%] xl:w-[1109px] m-auto">
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-between xl:mt-12 md:mt-5 sm:mt-8 mt-2 items-center gap-10 m-auto">
        <div className="lg:mt-2 md:mt-1 lg:w-[384px] md:w-[378px] sm:w-[230px] xl:w-auto sm:text-left text-center">
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-5xl xl:w-auto text-[#292830] font-bold">
            Track your Expenses & Save Money
          </h1>
          <h6 className="xl:text-2xl lg:text-lg md:text-sm sm:text-xs text-lg text-[#bdbdbd] xl:mt-5 xl:mb-10 sm:mt-3 mt-4 sm:mb-5 mb-6 hover:text-[#292830] cursor-context-menu">
            Helps you to organize your income and expenses
          </h6>
          <div className="flex sm:justify-normal justify-center items-center m-auto xl:gap-6 sm:gap-3 text-center">
            <button className="flex items-center justify-center bg-[#ff7235] text-white xl:text-2xl lg:text-lg md:text-sm sm:text-xs xl:px-6 xl:py-5 lg:px-4 lg:py-3 md:p-2 sm:p-1 p-1 md:rounded-lg rounded-md">
              <span>Try free demo</span> <KeyboardArrowDown />
            </button>
            <p className="flex items-center text-[#bdbdbd] xl:text-2xl lg:text-lg md:text-sm sm:text-xs">
              <span>—</span> <span>Web, iOS and Android</span>
            </p>
          </div>
        </div>
        <img
          src={illustration}
          className="xl:h-auto lg:h-96 md:h-56 sm:h-56 sm:m-0 mb-5"
          alt=""
        />
      </div>
    </div>
  );
};

export default home;
