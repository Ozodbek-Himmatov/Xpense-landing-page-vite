import "./index.css";
import Home from "./components/home/home";
import Overview from "./components/overview/overview";
import Cloud from "./components/cloud/cloud";
import FreeCost from "./components/free_cost/free_cost";
import Anytime from "./components/anytime/anytime";
import Product from "./components/product/product";
import Plan from "./components/plan/plan";
import Wishers from "./components/wishers/wishers";
import Downloads from "./components/downloads/downloads";
import Ending from "./components/ending/ending";

function App() {
  return (
    <div className="App">
      <Home />
      <Overview />
      <Cloud />
      {/* <FreeCost />
      <Anytime />
      <Product />
      <Plan />
      <Wishers />
      <Downloads />
      <Ending /> */}
    </div>
  );
}

export default App;
