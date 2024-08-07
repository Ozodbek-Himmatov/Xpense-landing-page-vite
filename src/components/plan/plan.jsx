import "./plan.css";
import {
  ArrowRightAlt,
  CardMembership,
  CardTravel,
  Done,
  Redeem
} from "@mui/icons-material";

const plan = () => {
  return (
    <div className="plans">
      <div className="plans-banner">
        <h1>Choose your flexible plan.</h1>
        <div className="plans-section">
          <div className="plan">
            <div className="plan-content">
              <div className="icon1">
                <CardTravel />
              </div>
              <h5>Starter Plan</h5>
              <ul>
                <li>
                  <i>
                    <Done />
                  </i>{" "}
                  Store unlimited data
                </li>
                <li>
                  <i>
                    <Done />
                  </i>{" "}
                  Export to pdf, xls, csv
                </li>
                <li>
                  <i>
                    <Done />
                  </i>{" "}
                  Cloud server support
                </li>
              </ul>
              <p className="costPlan">
                <b>$9.99/</b>
                <span>year</span>
              </p>
              <p className="comment">up to 3 user + 1.99 per user</p>
              <button>
                Get this <ArrowRightAlt />{" "}
              </button>
            </div>
          </div>
          <div className="plan">
            <div className="plan-content">
              <div className="icon2">
                <Redeem />
              </div>
              <h5>Silver Plan</h5>
              <ul>
                <li>
                  <i>
                    <Done />
                  </i>{" "}
                  Store unlimited data
                </li>
                <li>
                  <i>
                    <Done />
                  </i>{" "}
                  Export to pdf, xls, csv
                </li>
                <li>
                  <i>
                    <Done />
                  </i>{" "}
                  Cloud server support
                </li>
              </ul>
              <p className="costPlan">
                <b>$19.99/</b>
                <span>year</span>
              </p>
              <p className="comment">up to 3 user + 1.99 per user</p>
              <button>
                Get this <ArrowRightAlt />{" "}
              </button>
            </div>
          </div>
          <div className="plan">
            <div className="plan-content">
              <div className="icon3">
                <CardMembership />
              </div>
              <h5>Diamond Plan</h5>
              <ul>
                <li>
                  <i>
                    <Done />
                  </i>{" "}
                  Store unlimited data
                </li>
                <li>
                  <i>
                    <Done />
                  </i>{" "}
                  Export to pdf, xls, csv
                </li>
                <li>
                  <i>
                    <Done />
                  </i>{" "}
                  Cloud server support
                </li>
              </ul>
              <p className="costPlan">
                <b>$29.99/</b>
                <span>year</span>
              </p>
              <p className="comment">up to 3 user + 1.99 per user</p>
              <button>
                Get this <ArrowRightAlt />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default plan;
