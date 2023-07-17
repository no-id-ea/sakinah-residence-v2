import localFont from "next/font/local";
import Script from "next/script";
import { Footer } from "@/views";
import { Navbar } from "@/components";
import { ToastContainer } from "react-toastify";

import { ChildrenProps } from "@/types";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { gTag } from "@/constants";

const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../../public/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-general",
});

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../../public/fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-montserrat",
});

const lato = localFont({
  src: [
    {
      path: "../../public/fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lato",
});

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col w-full h-full items-center justify-center text-shadow ${generalSans.variable} ${montserrat.variable} ${lato.variable}`}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gTag}`} />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${gTag}');
        `}
        </Script>
      </body>
    </html>
  );
}
