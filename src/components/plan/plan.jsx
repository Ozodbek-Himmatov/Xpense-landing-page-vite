import {
  ArrowRightAlt,
  CardMembership,
  CardTravel,
  Done,
  Redeem
} from "@mui/icons-material";
const cardItems = [
  {
    id: 1,
    icon: CardTravel,
    title: "Starter",
    color: "#3ec1f3",
    cost: "9.99"
  },
  {
    id: 2,
    icon: Redeem,
    title: "Silver",
    color: "#ff7235",
    cost: "19.99"
  },
  {
    id: 3,
    icon: CardMembership,
    title: "Diamond",
    color: "#4d12ee",
    cost: "29.99"
  }
];
const cardListTexts = [
  { id: 1, text: "Store unlimited data" },
  { id: 2, text: "Export to pdf, xls, csv" },
  { id: 3, text: "Cloud server support" }
];

const plan = () => {
  return (
    <div className="bg-[#FFFAF8]">
      <div
        className="plans-banner m-auto flex flex-col sm:gap-20 gap-10
      w-[93%] sm:w-[80%] lg:w-[85%] xl:w-[1109px]
      xl:pt-36 md:pt-5 sm:pt-8 pt-2 sm:pb-40 pb-16"
      >
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-5xl font-bold color-[#292830] text-center">
          Choose your flexible plan.
        </h1>
        <div className="plans-section flex flex-col sm:flex-row justify-between max-sm:gap-5 max-sm:m-auto">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="plan bg-white border border-solid	border-[#f5f5f5] rounded-xl 
                xl:h-[500px] xl:w-[350px] lg:h-[400px] lg:w-[280px] md:h-[300px] md:w-[200px] sm:h-[250px] sm:w-[160px] h-[300px] w-[250px]
                hover:border-none hover:shadow-[0_2px_5px_1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] hover:duration-400"
            >
              <div className="plan-content xl:mt-10 xl:ml-10 lg:m-8 md:m-4 sm:m-3 my-6 mx-8">
                <div className="icon1" style={{ color: item.color }}>
                  <item.icon />
                </div>
                <h5 className="lg:text-4xl sm:text-lg text-2xl font-semibold lg:my-6 sm:my-1 my-4">
                  {item.title} Plan
                </h5>
                <ul className="flex flex-col lg:gap-2 lg:mb-6 md:mb-3 sm:mb-1">
                  {cardListTexts.map((item) => (
                    <li key={item.id}>
                      <i className="text-[#bdbdbd]">
                        <Done />
                      </i>
                      <span className="md:text-sm lg:text-base sm:text-xs">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="costPlan">
                  <b className="lg:text-2xl sm:text-base ">${item.cost}/</b>
                  <span className="lg:text-xl text-[#bdbdbd]">year</span>
                </p>
                <p className="comment text-xs text-[#bdbdbd]">
                  up to 3 user + 1.99 per user
                </p>
                <button
                  className="bg-white text-[#ff7235] border border-solid border-[#ff7235] rounded-lg md:text-lg sm:text-base text-xl
                xl:py-3 xl:px-6 lg:py-2 lg:px-4 md:py-1 md:px-2 sm:p-1 py-2 px-3 xl:mt-10 md:mt-5 mt-2 hover:bg-[#ff7235] hover:text-white"
                >
                  Get this <ArrowRightAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default plan;
