"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Home() {
  let currentdate = 25;
  const date = 2024;
  const year = new Date();
  const currentYear = year.getFullYear();
  return (
    <main className="text-lg">
      <div className="h-screen w-full bg-gray-200 overflow-visible">
        <div className="h-3/5 sm:h-4/5 bg-white sectop rounded-b-[50px] xl w-full flex items-center justify-center text-white font-bold">
          {" "}
          <h1 className="text-6xl text-center">
            <span className="text-[#2596be]">
              With {currentdate + (currentYear - date)} Years
            </span>{" "}
            <br /> Of Industrial Experience
          </h1>
        </div>
      </div>
    </main>
  );
}
