"use client";

import { LoaderScreen } from "@/components";
import ContactSection from "@/components/ContactSection";
import Crumb from "@/components/Crumb";
import ServiceCard from "@/components/ServiceCard";
import { client } from "@/sanity";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before fetch
    client
      .fetch(
        `
        *[_type == "service"]{
          
        ...
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

  if (loading) {
    return <LoaderScreen />; // Render loading state
  }
  console.log(data);
  return (
    <main className="">
      <Crumb title="Services we" span="offer" />
      <div className="px-5 sm:px-10 lg:px-32">
        {data.map((item, index) => (
          <div key={index}>
            <ServiceCard one={(index + 1) % 2 == 0 ? 1 : ""} data={item} />
          </div>
        ))}
      </div>
      <ContactSection />
    </main>
  );
}
