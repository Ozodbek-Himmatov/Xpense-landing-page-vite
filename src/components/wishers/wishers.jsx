import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

// import profile from "./profile.png";
import profile from "/src/assets/wishers/profile.png";

const ServiceData = [
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,",
    color: "FF7235"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,",
    color: "FFBE21"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,",
    color: "4756DF"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,",
    color: "3EC1F3"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,",
    color: "BB7259"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,",
    color: "FF7235"
  }
];

const Wishers = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-8xl text-[#292830] m-auto mt-20 w-[920px] text-center font-bold">
        We have millions of best wishers
      </h1>
      <div className="flex items-center justify-center flex-col my-20">
        <Swiper
          loop={true}
          spaceBetween={0}
          slidesPerView={4}
          freeMode={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-full"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.name}>
              <div
                className="flex flex-col w-[350px] h-[250px] bg-[#F5F5F5] mb-20 
              border-t-8 rounded-lg p-7 gap-2 group relative shadow-lg cursor-pointer"
                style={{ borderColor: `#${item.color}` }}
              >
                <p className="text-lg mb-4 ">{item.text}</p>
                <div className="flex items-center relative">
                  <img
                    src={profile}
                    className="mr-2"
                    style={{
                      backgroundImage: `url(${item.profile})`
                    }}
                    alt="profile"
                  />
                  <span className="mr-1 font-bold ">{item.name}</span>
                  <span className="text-[#BDBDBD]">CEO</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Wishers;
