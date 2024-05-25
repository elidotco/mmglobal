import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className=" w-full h-28 py-10 fixed top-0  px-5 md:px-10 lg:px-32 flex items-center justify-between ">
      {/* Logo */}
      <div className="">
        <Link href="/">
          <Image alt="logo image" src="/logo.png" width={200} height={300} />
        </Link>
      </div>
      <nav className="md:flex gap-10 text-[whitesmoke] hidden items-center">
        <ul className="flex flex-row  gap-8">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
        </ul>
        {/* COntact Button */}
        <div className="px-4 py-2 rounded-md hover:transition-all duration-100  hover:bg-blue-400 text-[whitesmoke] bg-green-400 transition-all hover:duration-150">
          <Link href="/">Contact us</Link>
        </div>
        {/* COntact Button */}
      </nav>
      {/* Logo */}
    </header>
  );
};

export default Navbar;
