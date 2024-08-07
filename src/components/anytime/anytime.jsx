import "./anytime.css";
import image from "./Image.png";
import { East } from "@mui/icons-material";

const anytime = () => {
  return (
    <div className="anytime">
      <div className="anytime-text-section">
        <h3>Use anytime</h3>
        <h1>Use anytime when you need</h1>
        <p>
          Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
          accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget
          ut.
        </p>
        <a href="">
          Learn more <East fontSize="" />
        </a>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default anytime;
