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
async function getContent() {
  const CONTENT_QUERY = `*[_type == "service"] {
  ...,
  icon {
    ...,
    asset->
  }
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

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
