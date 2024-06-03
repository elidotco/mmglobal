import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-[#2596be] py-32 w-full px-5 md:px-10 lg:px-32">
      <div
        className=" flex items-center
       px-4 s:px-8 w-full justify-between flex-col md:flex-row"
      >
        <div className="text-center">
          {/* <h2 className="text-base text-orang font-semibold tracking-wide uppercase">
            Contact Us
          </h2> */}
          <p className="italic upptext text-gray-200 text-xl font-semibold">
            Contact Us
          </p>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-7xl ">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 mx-auto">
            We would love to hear from you! Please fill out the form <br />{" "}
            below and we will get in touch with you shortly.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <form className="space-y-6  mx-auto">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 outline-none focus:border-indigo-500 sm:text-sm"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-orange-500 focus:outline-none bg-orange-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
