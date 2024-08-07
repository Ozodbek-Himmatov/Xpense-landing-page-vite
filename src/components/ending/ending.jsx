import "./ending.css";
import Logo from "../navbar/Logo.svg";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const ending = () => {
  return (
    <div className="ending">
      <div className="contact">
        <img src={Logo} alt="" />
        <div className="links">
          <p>links</p>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="legal">
          <p>legal</p>
          <ul>
            <li>
              <a href="">Terms of use</a>
            </li>
            <li>
              <a href="">Terms of conditions</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href="">Cookie policy</a>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <p>newsletter</p>
          <span className="span1">Over 25000 people have subscribed</span>
          <form className="subscription">
            <input
              className="add-email"
              type="email"
              placeholder="Enter your email"
            />
            <button className="submit-email" type="button">
              <span className="submit">Subscribe</span>
            </button>
          </form>
          <span className="span2">We don’t sell your email and spam</span>
        </div>
      </div>
      <hr />
      <footer>
        <div className="footer-left">
          <span>
            <a href="">Privacy & Terms</a>
          </span>
          <span>
            <a href="">Contact Us</a>
          </span>
        </div>
        <div className="copyright">Copyright @ 2022 xpence</div>
        <div className="socials">
          <a target="_blank" href="https://www.facebook.com/">
            <Facebook />
          </a>
          <a target="_blank" href="https://x.com/">
            <Twitter />
          </a>
          <a target="_blank" href="https://uz.linkedin.com/">
            <LinkedIn />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ending;
