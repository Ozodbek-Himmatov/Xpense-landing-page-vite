import { Devices, CloudQueue, BackpackOutlined } from "@mui/icons-material";
const cardItems = [
  {
    icon: Devices,
    title: "Cross Platform",
    bg_color: "#ffbd740d",
    color: "#ffbd74"
  },
  {
    icon: CloudQueue,
    title: "Cloud Server",
    bg_color: "#e2598b0d",
    color: "#e2598b"
  },
  {
    icon: BackpackOutlined,
    title: "Pure JavaScript",
    bg_color: "#4d12ee0d",
    color: "#4d12ee"
  }
];

const product = () => {
  return (
    <div
      className="sm:pb-28 pb-16 w-[93%] sm:w-[80%] lg:w-[85%] xl:w-[1109px] m-auto
    flex flex-col xl:pt-12 md:pt-5 sm:pt-8 pt-2"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:mb-20 sm:text-left text-center">
        <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-5xl xl:w-[643px] lg:w-[482px] md:w-[402px] sm:w-[241px] w-[295px] text-[#292830] font-bold">
          The Product we work with.
        </h1>
        <p
          className="xl:w-[345px] lg:w-[259px] md:w-[202px] sm:w-[173px]
          xl:text-2xl lg:text-lg md:text-sm sm:text-xs text-lg text-[#bdbdbd] 
          xl:mt-5 xl:mb-10 sm:mt-3 mt-4 sm:mb-5 mb-6 hover:text-[#292830] cursor-context-menu"
        >
          Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan
          nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between max-sm:gap-5 max-sm:m-auto">
        {cardItems.map((item) => (
          <div
            className="card hover:bg-slate-100 hover:shadow-[0_-2px_5px_-1px_rgba(50,50,93,0.25),0_1px_1px_3px_rgba(0,0,0,0.3)] 
          flex rounded-xl 
          xl:w-[350px] xl:h-[350px] lg:w-[280px] lg:h-[280px] md:w-[200px] md:h-[200px] sm:w-[165px] sm:h-[165px] w-[250px] h-[260px]"
          >
            <div className="card-content m-auto flex flex-col items-center">
              <div
                className="icon icon1 lg:w-16 lg:h-16 sm:w-12 sm:h-12 h-20 w-20 flex justify-center items-center rounded-full"
                style={{ backgroundColor: item.bg_color, color: item.color }}
              >
                <item.icon />
              </div>
              <h6 className="lg:text-3xl   sm:text-lg text-2xl font-medium md:mt-6 md:mb-3 sm:mt-4 sm:mb-3 m-6">
                {item.title}
              </h6>
              <p className="lg:text-sm md:text-sm sm:text-xs text-base text-[#bdbdbd] lg:w-56 md:w-auto sm:w-32 w-60 text-center">
                Elit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default product;
