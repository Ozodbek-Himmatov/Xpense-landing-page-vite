import "./free_cost.css";
import { East } from "@mui/icons-material";
import illustrator from "./Illustrator.png";

const free_cost = () => {
  return (
    <div className="cost">
      <div className="cost-banner-section">
        <img src={illustrator} alt="" />
        <div className="cost-text-section">
          <h3>free some cost</h3>
          <h1>Save cost for you and family</h1>
          <p>
            Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
            accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget
            ut.
          </p>
          <a href="">
            Learn more <East fontSize="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default free_cost;
