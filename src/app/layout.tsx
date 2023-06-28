import "./globals.css";
import localFont from "next/font/local";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-full h-full ${generalSans.variable} ${montserrat.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
