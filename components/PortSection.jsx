"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Image from "next/image";

const PortSection = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center w-full flex-col py-40">
        <p className="px-5 italic text-md upptext lg:text-xl text-gray-300">
          Case study
        </p>
        <h3 className=" text-4xl lg:text-6xl font-bold text-gray-300">
          Studio Portfolio
        </h3>
        <h3 className=" text-4xl lg:text-6xl text-center font-bold relative -top-6"></h3>
      </div>

      {/* Projects Carousel */}
      <div className="w-full hidden md:block">
        <Splide
          className=""
          options={{
            perPage: 3,

            autoplay: true,
            arrows: false,
            focus: "center",
            type: "loop",
            interval: 1000,
            gap: 120,
            mediaQuery: "min",
          }}
        >
          <SplideSlide className=" ">
            <div className="w-full bg-green-500  carou">
              <Image
                src="https://images.pexels.com/photos/2773515/pexels-photo-2773515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                width={100}
                height={100}
                className="w-full h-full object-fit"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full  border bg-green-500 carou"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full  border bg-green-500  carou"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full border  bg-red-500  carou"></div>
          </SplideSlide>
        </Splide>
      </div>
      {/* Projects Carousel */}
      <h4 className="text-gray-400 text-4xl italic my-20 text-center upptext">
        Clients
      </h4>
      <div className="slider w-full  shadow-md">
        <div className="slide-track">
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>

          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* clients Carousel */}
    </div>
  );
};

export default PortSection;
