import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const Herosection = () => {
  return (
    <section className="w-full h-fit py-10 lg:h-screen hero bg-[whitesmoke]  -z-10 pt-28 flex items-center flex-col gap-10 justify-center">
      <div className="w-full flex flex-col text-center md:text-left  px-5 md:px-10 lg:px-32 justify-start">
        <h1 className=" text-[40px] md:text-[60px] 2xl:text-[110px] font-bold text-white 2xl:leading-[110px] leading-[40px] lg:text-[80px] lg:leading-[80px] x ">
          OUR WORK <br /> <span className="text-[#2596be]">AMPLIFIES</span>
          <br />
          YOUR IDEAS
        </h1>
      </div>
      <title>Hello</title>
      {/* Learn More Button */}
      <div className="flex  md:flex-row gap-10 flex-col w-full items-center px-5 md:px-10 lg:px-32">
        <div className="lg:mt-20">
          <Link href="mailto">
            <div className="relative h-[50px]  justify-center overflow-hidden  text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56  px-6 py-3 cursor-pointer bg-[#2596be] flex flex-row items-center gap-1 ">
              <span className="relative z-10 flex flex-row gap-1">
                {" "}
                <MdOutlineArrowRightAlt size={26} />
                BOOK NOW
              </span>
            </div>
          </Link>
        </div>
        <div className="lg:mt-20">
          <Link href="/services">
            <div className=" cursor-pointer border-2  border-white relative h-[50px]  justify-center overflow-hidden  text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 hover:text-black px-6 py-3 hover:border-none flex flex-row items-center gap-1 ">
              <span className="relative z-10 flex flex-row gap-1 ">
                {" "}
                OUR SERVICES{" "}
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/* Learn More Button */}
    </section>
  );
};

export default Herosection;
