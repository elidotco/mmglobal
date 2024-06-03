import React from "react";

const Crumb = ({ type }) => {
  let currentdate = 25;
  const date = 2024;
  const year = new Date();
  const currentYear = year.getFullYear();
  return (
    <div>
      <div className="h-screen w-full  overflow-visible">
        <div className="h-3/5 sm:h-full bg-white sectop rounded-b-[50px] xl w-full flex items-center justify-center text-white font-bold">
          {" "}
          {type === "about" ? (
            <h1 className="text-6xl text-center">
              <span className="text-[#2596be]">
                With {currentdate + (currentYear - date)} Years
              </span>{" "}
              <br /> Of Industrial Experience
            </h1>
          ) : (
            <h1 className="text-6xl text-center">
              <span className="text-[#2596be]"></span> <br /> Of Industrial
              Experience
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Crumb;
