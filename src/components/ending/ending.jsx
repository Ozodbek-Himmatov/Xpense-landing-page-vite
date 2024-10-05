import Logo from "/src/assets/navbar/Logo.svg";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const links = [
  {
    id: 1,
    text: "Home"
  },
  {
    id: 2,
    text: "About us"
  },
  {
    id: 3,
    text: "Careers"
  },
  {
    id: 4,
    text: "Pricing"
  },
  {
    id: 5,
    text: "Features"
  },
  {
    id: 6,
    text: "Blog"
  }
];

const legal = [
  {
    id: 7,
    text: "Terms of use"
  },
  {
    id: 8,
    text: "Terms of conditions"
  },
  {
    id: 9,
    text: "Privacy policy"
  },
  {
    id: 0,
    text: "Cookie policy"
  }
];

const ending = () => {
  return (
    <div className="ending xl:w-[1009px] w-[93%] sm:w-[80%] lg:w-[85%] mb-24 m-auto">
      <div className="contact flex justify-between mt-20 mb-10">
      <img src={Logo} className="items-center text-center mb-auto" alt="" />
        <div className="links">
          <p className="lg:text-2xl md:text-xl text-[#292830] font-medium uppercase mb-6">
            links
          </p>
          <ul className="flex flex-col gap-2">
            {links.map((item) => (
              <li key={item.id} className="text-[#292830] lg:text-lg md:text-base font-medium">
                <a href="">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="legal">
          <p className="lg:text-2xl md:text-xl text-[#292830] font-medium uppercase mb-6">
            legal
          </p>
          <ul className="flex flex-col gap-2">
            {legal.map((item) => (
              <li key={item.id} className="text-[#292830] lg:text-lg md:text-base font-medium">
                <a href="">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="newsletter ">
          <p className="lg:text-2xl md:text-xl text-[#292830] font-medium uppercase mb-6">
            newsletter
          </p>
          <span className="span1 text-[#bdbdbd] lg:text-xl md:text-lg">
            Over 25000 people have subscribed
          </span>
          <form className="subscription">
            <input
              className="add-email lg:px-6 lg:py-5 md:px-5 md:py-4 lg:w-[350px] md:w-[300px] border-2 border-solid border-[#292830] focus:border-[#ff7235]
              rounded-lg placeholder:text-[#292830] placeholder:text-lg"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="submit-email relative right-[109px] bg-[#ff7235] md:px-4 md:py-3 font-semibold rounded-lg lg:mt-5 md:mt-3 mb-2.5"
              type="button"
            >
              <span className="submit text-white text-base font-semibold">
                Subscribe
              </span>
            </button>
          </form>
          <span className="span2 text-sm text-[#bdbdbd]">
            We don’t sell your email and spam
          </span>
        </div>
      </div>
      <hr />
      <footer className="flex justify-between mt-5 text-[#292830] text-sm">
        <div className="footer-left">
          <span>
            <a href="" className="me-6">
              Privacy & Terms
            </a>
          </span>
          <span>
            <a href="">Contact Us</a>
          </span>
        </div>
        <div className="copyright">Copyright @ 2022 xpence</div>
        <div className="socials">
          <a className="me-3" target="_blank" href="https://www.facebook.com/">
            <Facebook />
          </a>
          <a className="me-3" target="_blank" href="https://x.com/">
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
