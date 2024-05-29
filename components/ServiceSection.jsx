import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ServiceSection = () => {
  return (
    <div className="lg:py-20 py-10">
      <div className="flex items-center justify-between flex-col md:flex-row gap-y-6 px-10">
        <h3 className="text-4xl md:text-6xl font-semibold">Our Services</h3>
        <Link href="/">
          <div className=" cursor-pointer border-2  border-white relative h-[50px]  justify-center overflow-hidden  text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 bg-white before:rounded-full before:bg-black before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 hover:text-white px-6 py-3 hover:border-black flex flex-row items-center gap-1 ">
            <span className="relative z-10 flex flex-row gap-1 items-center">
              {" "}
              <MdOutlineArrowRightAlt size={26} />
              OUR SERVICES{" "}
            </span>
          </div>
        </Link>
      </div>

      <div className="flex flex-row flex-wrap py-20 gap-y-10  items-center px-5 md:px-10 lg:px-32 justify-center">
        <div className="w-[300px]  h-[300px] rounded-full bg-white shadow-lg relative   justify-center overflow-hidden  text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:before:h-[300px] hover:before:w-[300px]  px-6 py-3 cursor-pointer flex flex-col items-center  gap-1 ">
          <div className="z-10 relative">Hello</div>
        </div>
        <div className="w-[300px]  h-[300px] rounded-full bg-white shadow-lg relative   justify-center overflow-hidden  text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:before:h-[300px] hover:before:w-[300px]  px-6 py-3 cursor-pointer flex flex-col items-center gap-1 "></div>
        <div className="w-[300px]  h-[300px] rounded-full bg-white shadow-lg relative   justify-center overflow-hidden  text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:before:h-[300px] hover:before:w-[300px]  px-6 py-3 cursor-pointer flex flex-col items-center gap-1 "></div>
        <div className="w-[300px]  h-[300px] rounded-full bg-white shadow-lg relative   justify-center overflow-hidden  text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:before:h-[300px] hover:before:w-[300px]  px-6 py-3 cursor-pointer flex flex-row items-center gap-1 "></div>
      </div>
    </div>
  );
};

export default ServiceSection;
