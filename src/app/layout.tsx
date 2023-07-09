import localFont from "next/font/local";
import { Footer } from "@/views";
import { Navbar } from "@/components";

import { ChildrenProps } from "@/types";
import "./globals.css";

const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  variable: "--font-general",
});

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
  ],
  variable: "--font-montserrat"
})

const lato = localFont({
  src: [
    {
      path: "../../public/fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/Lato-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/Lato-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-lato"
})


export const metadata = {
  title: "Sakinah Residence - Rumah Sehat Spek Hebat Harga Hemat",
  description: "Hallo ini sakinah residence",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={`flex flex-col w-full h-full items-center justify-center ${generalSans.variable} ${montserrat.variable} ${lato.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
