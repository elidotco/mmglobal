import Image from "next/image";
import React from "react";

const WelcomeSection = () => {
  return (
    <div className="min-h-fit py-10 md:py-20 bg-white">
      <Image
        alt="logo image"
        src="/LOGO-2.png"
        width={100}
        height={100}
        loading="eager"
        className=" w-36  mx-auto "
      />
      <div className="flex  text-3xl justify-center mt-10 px-5 md:px-12">
        <h2 className="text-[30px] lg:text-[41.5px] font leading-[1] text-center ">
          We have Partnered Various High-Level Institutions to Create Innovative
          Products that{" "}
          <span className="text-[#2596be]">change Public Perception</span>
        </h2>
      </div>

      {/* FIts */}
      <div className=" mt-20 flex w-full px-5 md:px-10 lg:px-32 flex-col md:flex-row items-center gap-y-10 md:justify-between">
        <div className="flex-col gap-8 flex items-center icons">
          {/* Icons */}
          <Image
            alt="logo one"
            src="/clients.svg"
            width={100}
            height={100}
            className="w-14 h-14 hover:w-10 hover:h-10 transition-all hover:transition-all"
          />
          <h3 className="font-bold text-6xl">60+</h3>
          <p className="text-gray-500">Satisfied Clients</p>
          {/* Icons */}
        </div>
        <div className="flex-col items-center icons gap-8 flex">
          {/* Icons */}
          <Image
            alt="logo one"
            src="/projects.svg"
            width={100}
            height={100}
            className="w-14 h-14 hover:w-10 hover:h-10 transition-all hover:transition-all"
          />
          <h3 className="font-bold text-6xl">40+</h3>
          <p className="text-gray-500 ">Completed Projects</p>
          {/* Icons */}
        </div>
        <div className="flex-col items-center icons gap-8 flex">
          {/* Icons */}
          <Image
            alt="logo one"
            src="/years.svg"
            width={100}
            height={100}
            className="w-14 h-14 hover:w-10 hover:h-10 transition-all hover:transition-all"
          />
          <h3 className="font-bold text-6xl">26</h3>
          <p className="text-gray-500">Years Of Experience</p>
          {/* Icons */}
        </div>
      </div>
      {/* FIts */}
    </div>
  );
};

export default WelcomeSection;
