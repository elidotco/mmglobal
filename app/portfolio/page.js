import {
  Herosection,
  PortSection,
  ServiceSection,
  WelcomeSection,
} from "@/components";
import ContactSection from "@/components/ContactSection";
import Crumb from "@/components/Crumb";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Crumb title="Case Study" span="" />
      <ContactSection />
    </main>
  );
}
