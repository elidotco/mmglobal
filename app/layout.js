import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
const Footer = dynamic(() => import("../components/Footer"));

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "MM Global-Discover the power of media with MM GLOBAL Multimedia",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
