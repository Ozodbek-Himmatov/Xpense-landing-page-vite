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
    <div className="ending xl:w-[1009px] w-[93%] sm:w-[80%] lg:w-[85%] sm:mb-24 mb-7 m-auto">
      <div className="contact flex sm:flex-row flex-col justify-between sm:mt-20 sm:mb-10 my-5">
        <img
          src={Logo}
          className="items-center text-center sm:mb-auto max-sm:ms-5 sm:w-auto w-32"
          alt=""
        />
        <div className="flex justify-around max-sm:mt-3">
          <div className="links">
            <p className="lg:text-2xl md:text-xl text-[#292830] sm:font-medium font-semibold uppercase lg:mb-6 md:mb-2">
              links
            </p>
            <ul className="flex flex-col sm:gap-2">
              {links.map((item) => (
                <li key={item.id} className="text-[#292830]">
                  <a
                    href=""
                    className="lg:text-lg md:text-base sm:text-xs font-medium"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="legal">
            <p className="lg:text-2xl md:text-xl text-[#292830] sm:font-medium font-semibold uppercase lg:mb-6 md:mb-2">
              legal
            </p>
            <ul className="flex flex-col sm:gap-2">
              {legal.map((item) => (
                <li key={item.id} className="text-[#292830]">
                  <a
                    href=""
                    className="lg:text-lg md:text-base sm:text-xs font-medium"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="newsletter relative max-sm:m-auto">
          <p className="lg:text-2xl md:text-xl text-[#292830] max-sm:text-center font-medium uppercase lg:mb-6 md:mb-2">
            newsletter
          </p>
          <span className="span1 text-[#bdbdbd] lg:text-xl md:text-base sm:text-sm">
            Over 25000 people have subscribed
          </span>
          <form className="subscription">
            <input
              className="lg:px-6 lg:py-5 md:px-5 md:py-4 sm:px-3 sm:py-2 px-2 py-1.5 lg:w-[350px] md:w-[250px] w-full border-2 border-solid border-[#292830] focus:border-[#ff7235] rounded-lg placeholder:text-[#292830] lg:placeholder:text-lg placeholder:text-sm"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="submit-email absolute lg:right-[8px] md:right-[9px] sm:right-[5px] right-[5px] 
              lg:mt-2.5 md:mt-2 sm:mt-1.5 mt-1 bg-[#ff7235] 
              lg:px-4 md:px-1 sm:px-2 lg:py-3 md:py-2.5 sm:py-1 px-1 py-1 font-semibold sm:rounded-lg rounded"
              type="button"
            >
              <span className="submit text-white lg:text-base md:text-sm text-xs font-semibold">
                Subscribe
              </span>
            </button>
          </form>
          <span className="span2 lg:text-sm text-xs text-[#bdbdbd]">
            We don’t sell your email and spam
          </span>
        </div>
      </div>
      <hr />
      <footer className="flex sm:flex-row flex-col justify-between mt-5 text-[#292830] text-sm">
        <div className="footer-left flex justify-between">
          <span>
            <a href="" className="me-6">
              Privacy & Terms
            </a>
          </span>
          <span>
            <a href="">Contact Us</a>
          </span>
        </div>
        <div className="flex justify-between">
          <div className="copyright">Copyright @ 2022 xpence</div>
          <div className="socials">
            <a
              className="sm:me-3"
              target="_blank"
              href="https://www.facebook.com/"
            >
              <Facebook />
            </a>
            <a className="sm:me-3" target="_blank" href="https://x.com/">
              <Twitter />
            </a>
            <a target="_blank" href="https://uz.linkedin.com/">
              <LinkedIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ending;
