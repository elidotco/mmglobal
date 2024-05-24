import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const Herosection = () => {
  return (
    <section className="w-full md:h-[759px] h-[400px] lg:h-screen hero bg-[whitesmoke] top-0 absolute -z-10 pt-28 flex items-center flex-col gap-10 justify-center">
      <div className="bg-gradient w-full h-[400px] lg:h-screen "></div>

      <div className="flex flex-col -mt-36 items-center">
        <h1 className="text-[90px] font-bold text-white ">
          Elevate Your Brand
        </h1>
        <h1 className="hero-text text-[90px] font-bold text-white bg-clip-text ">
          MM GLOBAL
        </h1>
      </div>
      {/* Learn More Button */}
      <div className="mt-20">
        <Link href="/">
          <div className="text-white px-6 py-3 cursor-pointer border flex flex-row  border-white">
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
