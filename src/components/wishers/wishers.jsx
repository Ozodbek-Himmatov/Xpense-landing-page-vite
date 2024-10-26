import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./wishers.css";

import { Pagination, FreeMode } from "swiper/modules";

import profile from "/src/assets/wishers/profile.png";
import profile2 from "/src/assets/wishers/profile2.png";
import profile3 from "/src/assets/wishers/profile3.png";
import profile4 from "/src/assets/wishers/profile4.png";

const ServiceData = [
  {
    id: 1,
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,",
    color: "4756DF"
  },
  {
    id: 2,
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile3,
    name: "Cameron Williamson,",
    color: "3EC1F3"
  },
  {
    id: 3,
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile4,
    name: "Cameron Williamson,",
    color: "BB7259"
  },
  {
    id: 4,
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile,
    name: "Cameron Williamson,",
    color: "FF7235"
  },
  {
    id: 5,
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile2,
    name: "Cameron Williamson,",
    color: "FFBE21"
  },
  {
    id: 6,
    text: "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
    image: profile2,
    name: "Cameron Williamson,",
    color: "327235"
  }
];

export default function Wishers() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    }
  };

  return (
    <div className="flex flex-col">
      <h1
        className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-5xl text-[#292830] m-auto mt-20 text-center font-bold
      xl:w-[802px] lg:w-[602px] md:w-[502px] sm:w-[401px]"
      >
        We have millions of best wishers
      </h1>
      <div className="flex items-center justify-center flex-col my-20">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25
            },
            872: {
              slidesPerView: 4,
              spaceBetween: 60
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
          loop={true}
          centeredSlides={true}
          freeMode={true}
          pagination={pagination}
          modules={[Pagination, FreeMode]}
          className="mySwiper max-w-full"
        >
          {ServiceData.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex flex-col bg-[#F5F5F5] mb-20 border-t-8 rounded-lg xl:p-5 lg:p-2 sm:p-1 py-2 px-1 shadow-lg cursor-pointer"
              style={{ borderColor: `#${item.color}` }}
            >
              <p className="xl:text-lg lg:text-sm text-xs xl:mb-6 lg:mb-5 mb-2">
                {item.text}
              </p>
              <div className="flex items-center">
                <img
                  src={item.image}
                  className="mr-1 lg:mr-3 xl:w-8 lg:w-7 w-5"
                  style={{
                    backgroundImage: `url(${item.profile})`
                  }}
                  alt="profile"
                />
                <span className="mr-1 font-bold xl:text-base lg:text-sm text-xs">
                  {item.name}
                </span>
                <span className="text-[#BDBDBD]">CEO</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
