import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const Herosection = () => {
  return (
    <section className="w-full h-screen hero bg-[whitesmoke]  -z-10 pt-28 flex items-center flex-col gap-10 justify-center">
      <div className="w-full border flex flex-col  px-5 md:px-10 lg:px-32 justify-start">
        <h1 className=" text-xl md:text-4xl lg:text-[90px] font-bold text-white lg:leading-[110px] ">
          Elevate <br />
          Your Brand !
        </h1>
      </div>
      {/* Learn More Button */}
      <div className="mt-20">
        <Link href="/">
          <div className="text-white px-6 py-3 cursor-pointer border flex flex-row items-center border-white">
            Learn More{" "}
            <span>
              <MdOutlineArrowRightAlt size={24} />
            </span>
          </div>
        </Link>
      </div>
      {/* Learn More Button */}
    </section>
  );
};

export default Herosection;
