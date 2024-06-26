import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import Crumb from "@/components/Crumb";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <Crumb title="Portfolio" span="" />

      <div className="flex items-center justify-center w-full flex-col py-40">
        <h3 className=" text-4xl lg:text-6xl font-bold text-gray-300">
          Studio Portfolio
        </h3>
        <h3 className=" text-4xl lg:text-6xl text-center font-bold relative -top-6">
          We have done all projects
        </h3>
      </div>
      <section className="w-full px-5 md:px-10 lg:px-32 flex flex-col md:flex-row md:flex-wrap justify-between gap-y-10 py-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
      <ContactSection />
    </main>
  );
}
