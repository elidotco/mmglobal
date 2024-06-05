import React from "react";

const ServiceCard = ({ one }) => {
  if (one) {
    return (
      <div className="flex w-full flex-col-reverse md:flex-row gap-20 2xl:px-20 h-fit py-20 items-center ">
        {/* Images */}
        <div className="md:w-1/2 w-full  bg-green-400 h-80 "></div>
        {/* Images  */}
        <div className="md:w-1/2 w-full">
          {/* Icon */}
          <p className="w-fit px-4 py-4 bg-orange-400 my-5">Icon</p>
          {/* Icon */}
          {/* Title */}
          <p className="text-2xl font-bold ">Title</p>
          {/* Title */}
          {/* Description */}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            minima aspernatur unde assumenda, ipsam provident repellat
            voluptates dicta architecto tenetur, velit perferendis debitis
            laborum! Commodi alias ex officiis quis blanditiis!
          </p>
          {/* Description */}
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col md:flex-row gap-20 2xl:px-20 h-fit  py-20 items-center ">
      <div className=" w-full md:w-1/2">
        {/* Icon */}
        <p className="w-fit px-4 py-4 bg-orange-400 my-5">Icon</p>
        {/* Icon */}
        {/* Title */}
        <p className="text-2xl font-bold ">Title</p>
        {/* Title */}
        {/* Description */}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          minima aspernatur unde assumenda, ipsam provident repellat voluptates
          dicta architecto tenetur, velit perferendis debitis laborum! Commodi
          alias ex officiis quis blanditiis!
        </p>
        {/* Description */}
      </div>
      {/* Images */}
      <div className="w-full md:w-1/2  bg-green-400 h-80 "></div>
      {/* Images */}
    </div>
  );
};

export default ServiceCard;
