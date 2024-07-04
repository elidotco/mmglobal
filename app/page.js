"use client";

import { Herosection, WelcomeSection } from "@/components";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

import { client } from "@/sanity";
import { useEffect, useState } from "react";
// Fetch content with GROQ
import dynamic from "next/dynamic";
const ServiceSection = dynamic(() => import("../components/ServiceSection"));
const PortSection = dynamic(() => import("../components/PortSection"));

// Log content to console

// Insert the return component calling `getContent()` below
export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [clients, setClients] = useState(null);

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

    client
      .fetch(
        `
        *[_type == "client"]{
          
          image
        }
      `
      )
      .then((fetchedData) => {
        setClients(fetchedData);
        setLoading(false);
        // Set loading to false after data is fetched
        console.log(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <main className="">
      <Herosection />
      <WelcomeSection />
      <ServiceSection data={data} />
      <PortSection data={clients} />
      <ContactSection />
    </main>
  );
}
