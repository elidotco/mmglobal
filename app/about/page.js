"use client";
import ContactSection from "@/components/ContactSection";
import Crumb from "@/components/Crumb";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Crumb type="about" />
      <div className="pb-20 mt-20 px-5 sm:px-10 lg:px-32">
        <h2 className="text-center  text-2xl font-bold">
          <span className="text-[#2596be] ">At MM Global Multimedia</span>, we
          are your trusted source for cutting-edge media solutions.
        </h2>
        <div>
          <div className="py-20 text-lg">
            <h3 className=" text-4xl font-bold text-left upptext text-orange-400 ">
              Who we Are
            </h3>
            We are a dynamic and innovative media company with a passionate team
            of creative minds and technical experts. Our diversity is our
            strength, bringing together talents from various backgrounds,
            cultures, and expertise to fuel our creative engine.
          </div>
          <div className="w-full flex-col md:flex-row flex mt-20  gap-20">
            <div className="w-full md:w-1/2">
              <h3 className=" text-4xl font-bold text-left upptext text-[#2596be] pb-10 ">
                Our Mission
              </h3>
              Our mission is clear and unwavering: to push the boundaries of
              multimedia creativity and innovation. We strive to create
              impactful, unforgettable experiences through media that resonate
              with a global audience. MM Global Multimedia is committed to
              setting new standards for excellence in the media industry.
            </div>

            <div className=" flex-1">
              <h3 className=" text-4xl font-bold text-left upptext text-[#2596be] flex-1 pb-10">
                Our Core Values
              </h3>
              <ul>
                <li>
                  <strong>Innovation:</strong> We thrive on pushing the
                  boundaries of creativity and staying at the forefront of
                  technological advancements.
                </li>
                <li>
                  <strong>Quality:</strong> Our commitment to quality is
                  unwavering. We believe that every piece of media we produce
                  should be a masterpiece.
                </li>
                <li>
                  <strong>Integrity:</strong> Honesty, ethics, and transparency
                  are the cornerstones of our interactions with clients,
                  partners, and each other.
                </li>
                <li>
                  <strong>Diversity:</strong> We celebrate diversity and believe
                  it fosters a rich and dynamic creative environment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit py-32 sect px-5 sm:px-10 lg:px-28">
        <h3 className="text-center text-4xl font-bold pb-20 ">
          {" "}
          <span className="text-[#2596be] ">Our</span> Pillars
        </h3>
        <div className="flex flex-col md:flex-row gap-20 justify-between ">
          <div>
            <p className="text-8xl font-bold text-orange-500 text-center pb-10 ">
              1
            </p>
            <h4 className="text-2xl font-bold">High Quality Content</h4>
            <p className="text-lg pt-10">
              We craft compelling and high-quality content across various media
              platforms, from engaging videos and captivating visuals to
              thought-provoking written pieces.
            </p>
          </div>
          <div>
            <p className="text-8xl font-bold text-orange-500 text-center pb-10 ">
              2
            </p>
            <h4 className="text-2xl font-bold text-center">
              Strategic Media Services
            </h4>
            <p className="text-lg pt-10">
              Our strategic media services encompass everything from media
              planning and distribution to marketing strategies, ensuring that
              your message reaches its intended audience effectively
            </p>
          </div>
          <div>
            <p className="text-8xl font-bold text-orange-500 text-center pb-10 ">
              3
            </p>
            <h4 className="text-2xl font-bold text-center">Global Reach</h4>
            <p className="text-lg pt-10">
              With a focus on global outreach, we aspire to touch the lives and
              hearts of audiences around the world. We understand the power of
              media to transcend borders and connect people.
            </p>
          </div>
        </div>
      </div>
      {/* Contact Section with location */}
      <div>
        {/* team Carousel */}
        {/* <div className="w-full hidden md:block">
          <Splide
            className=""
            options={{
              perPage: 3,
              pagination: false,
              autoplay: true,
              arrows: false,
              focus: "center",
              type: "loop",
              interval: 1000,
              gap: 60,
              mediaQuery: "min",
            }}
          >
            <SplideSlide className="active:bg-yellow-300 focus:h-[500px] ">
              <div className="w-full h-[300px] bg-green-500  carou">
                <Image
                  src="https://images.pexels.com/photos/2773515/pexels-photo-2773515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  width={100}
                  height={100}
                  className="w-full h-full aspect-auto object-cover"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-[300px] border bg-green-500 carou"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-[300px] border bg-green-500  carou"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full border h-[300px] bg-red-500  carou"></div>
            </SplideSlide>
          </Splide>
        </div> */}
        {/* team Carousel */}
      </div>
      <ContactSection />
    </main>
  );
}
