import "./navbar.css";
import Logo from "./Logo.svg";

const navbar = () => {
  return (
    <nav className="">
      <div className="nav-logo-container">
        <a href="#">
          <img src={Logo} alt="Xpense" />
        </a>
      </div>
      <div className="navbar-links-container">
        <a href="">Features</a>
        <a href="">About us</a>
        <a href="">Pricing</a>
        <a href="">Feedback</a>
      </div>
      <button className="request">Request a demo</button>
    </nav>
  );
};

export default navbar;
