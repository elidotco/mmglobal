import React from "react";

const Footer = () => {
  const currentDate = new Date();

  // Get the current year
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="  relative w-full  bottom-0">
      <div className="px-5 sm:px-10 lg:px-32 pb-20 footer text-white z-20">
        <h3 className="w-full text-3xl text-center justify-between font-bold py-20 ">
          We collaborate with production partners and visionary filmmakers
          around the world.
        </h3>
        <div className="flex justify-between gap-20 flex-col md:flex-row">
          <div className="">
            <h3 className="font-bold text-2xl pb-10">Contact Us</h3>
            <a className="py-3 pb-5" href="tel:+233 30 290 4912">
              {" "}
              +233 30 290 4912
            </a>

            <p> Monday - Friday 09:00 AM - 06:00 PM</p>

            <p>Saturday 09:00 AM - 03:00 PM</p>
          </div>

          <div className="">
            <h3 className="font-bold text-2xl">Quick Links</h3>
            <ul className="flex flex-col gap-2 py-10">
              <li>
                <a className="" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="" href="/contact">
                  careers
                </a>
              </li>
              <li>
                <a className="" href="/services">
                  Our pillar
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-2xl">Our Services</h3>
            <ul className="flex flex-col gap-2 py-10">
              <li>
                <a className="" href="/services">
                  Film Production
                </a>
              </li>
              <li>
                <a className="" href="/services">
                  Creative Direction
                </a>
              </li>
              <li>
                <a className="" href="/services">
                  Digital Content
                </a>
              </li>
              <li>
                <a className="" href="/services">
                  Digital Support
                </a>
              </li>
              <li>
                <a className="" href="/services">
                  Visual Effects
                </a>
              </li>
              <li>
                <a className="" href="/services">
                  VFX Making
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-gray-800 text-white py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
