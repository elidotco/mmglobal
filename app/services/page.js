import ContactSection from "@/components/ContactSection";
import Crumb from "@/components/Crumb";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Crumb title="Services we" span="offer" />
      <ContactSection />
    </main>
  );
}
