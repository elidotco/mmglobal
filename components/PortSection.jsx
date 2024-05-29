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

const PortSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h3 className="text-6xl font-bold">Studio Portfolio</h3>
      </div>

      <div className="w-full">
        <Splide
          className="border"
          options={{
            perPage: 3,

            autoplay: true,
            arrows: false,
            focus: "center",
            type: "loop",
            interval: 1000,
            gap: 30,
          }}
        >
          <SplideSlide className="active:bg-yellow-300 focus:h-64">
            <div className="w-full h-56 bg-green-500"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-56 border bg-green-500"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-56 border bg-green-500"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full border h-56 bg-red-500"></div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default PortSection;
