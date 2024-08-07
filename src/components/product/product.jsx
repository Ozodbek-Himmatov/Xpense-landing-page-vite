import "./product.css";
import { Devices, CloudQueue, BackpackOutlined } from "@mui/icons-material";

const product = () => {
  return (
    <div className="product">
      <div className="text-section">
        <h1>The Product we work with.</h1>
        <p>
          Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan
          nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
        </p>
      </div>
      <div className="products-section">
        <div className="card">
          <div className="card-content">
            <div className="icon icon1">
              <Devices />
            </div>
            <h6>Cross Platform</h6>
            <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="icon icon2">
              <CloudQueue />
            </div>
            <h6>Cloud Server</h6>
            <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="icon icon3">
              <BackpackOutlined />
            </div>
            <h6>Pure JavaScript</h6>
            <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
