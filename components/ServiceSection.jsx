import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ServiceSection = ({ data }) => {
  console.log(data);
  return (
    <div className="lg:py-20 py-10">
      <p className="px-5 italic text-xl text-gray-300 upptext">What we are</p>
      <div className="flex items-center relative justify-between gap-y-20 md:gap-y-6 flex-col md:flex-row  px-5 md:px-10">
        <h3 className="text-4xl md:text-6xl font-semibold text-gray-300">
          Our services
        </h3>
        <h3 className="text-4xl md:text-6xl absolute lg:left-14 top-5 md:top-7  font-semibold">
          We provide solutions
        </h3>

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

      <div className="flex flex-row flex-wrap py-40 gap-y-10  items-center px-5 md:px-10 lg:px-32 justify-center ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="w-[300px]  h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-white shadow-lg relative   justify-center overflow-hidden   text-orange-400 hover:text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-400 before:duration-500 before:ease-out hover:before:h-[300px] hover:before:w-[300px] lg:hover:before:w-[400px] lg:hover:before:h-[400px] px-6 py-3 cursor-pointer flex flex-col items-center  gap-1 "
          >
            <div className="z-10 relative flex text-center font-bold items-center justify-center flex-col">
              heelo
              <h4 className="text-2xl text-bold  flex items-center justify-center z-10">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
