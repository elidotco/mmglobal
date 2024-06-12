"use client";

import {
  Herosection,
  PortSection,
  ServiceSection,
  WelcomeSection,
} from "@/components";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

import { client } from "@/sanity";
import { useEffect } from "react";

// Fetch content with GROQ

// Log content to console

// Insert the return component calling `getContent()` below
export default function Home() {
  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "service"]{
         ...,
        
          
    
          
        }
  `
      )
      .then((data) => {
        console.log(data);
      });
    return () => {};
  });
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
