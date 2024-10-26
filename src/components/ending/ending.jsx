import Logo from "/src/assets/navbar/Logo.svg";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const links = ["Home", "About us", "Careers", "Pricing", "Features", "Blog"];

const legal = [
  "Terms of use",
  "Terms of conditions",
  "Privacy policy",
  "Cookie policy"
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
        <div className="flex justify-evenly md:w-full max-sm:mt-3">
          <div className="links">
            <p className="lg:text-2xl md:text-xl text-[#292830] sm:font-medium font-semibold uppercase lg:mb-6 md:mb-2">
              links
            </p>
            <ul className="flex flex-col sm:gap-2">
              {links.map((item) => (
                <li key={item} className="text-[#292830]">
                  <a
                    href=""
                    className="lg:text-lg md:text-base sm:text-xs font-medium"
                  >
                    {item}
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
                <li key={item} className="text-[#292830]">
                  <a
                    href=""
                    className="lg:text-lg md:text-base sm:text-xs font-medium"
                  >
                    {item}
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
              className="lg:ps-4 lg:pe-28 md:pe-20 lg:py-5 md:ps-3 md:py-4 sm:ps-2 sm:pe-20 sm:py-2 ps-1.5 pe-16 py-1.5 
              lg:w-[350px] md:w-[240px] sm:w-[215px] w-full border-2 border-solid border-[#292830] focus:border-[#ff7235] outline-none rounded-lg 
              placeholder:text-[#292830] lg:placeholder:text-lg placeholder:text-sm"
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
      <footer className="flex flew-col sm:flex-row max-sm:flex-wrap justify-between mt-5 text-[#292830] text-sm">
        <div className="flex max-sm:w-full justify-between sm:gap-3">
          <span>
            <a href="" className="">
              Privacy & Terms
            </a>
          </span>
          <span>
            <a href="">Contact Us</a>
          </span>
        </div>
        <span className="copyright">Copyright @ 2022 xpence</span>
        <div className="socials">
          <a
            className="sm:me-2"
            target="_blank"
            href="https://www.facebook.com/"
          >
            <Facebook />
          </a>
          <a className="sm:me-2" target="_blank" href="https://x.com/">
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
