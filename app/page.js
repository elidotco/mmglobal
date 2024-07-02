"use client";

import {
  Herosection,
  LoaderScreen,
  PortSection,
  WelcomeSection,
} from "@/components";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

import { client } from "@/sanity";
import { useEffect, useState } from "react";
// Fetch content with GROQ
import dynamic from "next/dynamic";
const ServiceSection = dynamic(() => import("../components/ServiceSection"));

// Log content to console

// Insert the return component calling `getContent()` below
export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before fetch
    client
      .fetch(
        `
        *[_type == "service"][0...4]{
          
          title,
          icon
        }
      `
      )
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <main className="">
      {console.log(data)}
      <Herosection />
      <WelcomeSection />
      <ServiceSection data={data} />
      <PortSection />
      <ContactSection />
    </main>
  );
}
