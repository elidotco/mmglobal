import React from "react";

const LoaderScreen = () => {
  return (
    <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center bg-white text-center z-50">
      <div class="lds-hourglass"></div>
    </div>
  );
};

export default LoaderScreen;
