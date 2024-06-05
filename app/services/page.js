import ContactSection from "@/components/ContactSection";
import Crumb from "@/components/Crumb";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Crumb title="Services we" span="offer" />
      <div className="px-5 sm:px-10 lg:px-32">
        <ServiceCard one={1} />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <ContactSection />
    </main>
  );
}
