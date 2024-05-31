import {
  Herosection,
  PortSection,
  ServiceSection,
  WelcomeSection,
} from "@/components";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Herosection />
      <WelcomeSection />
      <ServiceSection />
      <PortSection />
      <ContactSection />
    </main>
  );
}
