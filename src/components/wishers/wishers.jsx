import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import "./wishers.css";
import Cards from "./Cards.png";
import Slider from "./Slider.png";
import profile from "./profile.png";

const ServiceData = [
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,"
  },
  {
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,"
  }
];

const Wishers = () => {
  return (
    <div className="wishers">
      <div className="wishers_content">
        <h1>We have millions of best wishers</h1>
        <div className="flex items-center justify-center flex-col h-[900px]">
          <Swiper
            spaceBetween={150}
            slidesPerView={4}
            freeMode={true}
            pagination={{
              clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-full"
          >
            {ServiceData.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="wish-card flex flex-col w-[350px] h-[250px] bg-[#F5F5F5] mb-20 border-t-8 border-black rounded-lg p-7 gap-2 group relative shadow-lg cursor-pointer">
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
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Wishers;
