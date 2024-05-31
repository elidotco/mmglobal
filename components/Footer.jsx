import React from "react";

const Footer = () => {
  const currentDate = new Date();

  // Get the current year
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8 relative bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">MM GLOBAL</h3>
            <p className="mt-2 text-gray-400">
              © {currentYear} MM global. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
