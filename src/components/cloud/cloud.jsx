import "./cloud.css";
import illustrator from "./Illustrator.png";
import { East } from "@mui/icons-material";

const cloud = () => {
  return (
    <div className="cloud">
      <div className="cloud-text-section">
        <h3>Alwalys online</h3>
        <h1>Real-time support with cloud</h1>
        <p>
          Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
          accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget
          ut.
        </p>
        <a href="">
          Learn more <East fontSize="" />
        </a>
      </div>
      <img src={illustrator} alt="" />
    </div>
  );
};

export default cloud;
