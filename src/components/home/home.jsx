import "./home.css";
import Navbar from "../navbar/navbar";
import illustration from "./Illustration.png";
import { KeyboardArrowDown } from "@mui/icons-material";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1>Track your Expenses & Save Money</h1>
          <h6>Helps you to organize your income and expenses</h6>
          <div className="free-demo">
            <button>
              Try free demo <KeyboardArrowDown fontSize="large" />
            </button>
            <p>— Web, iOS and Android</p>
          </div>
        </div>
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};

export default home;
