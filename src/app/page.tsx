import { Metadata } from "next";

import { Banner, Info, Product, Faq, Branding } from "@/views";

export const metadata: Metadata = {
  title: {
    template: "%s - Sakinah Residence",
    absolute: "Sakinah Residence - Rumah Sehat Spek Hebat Harga Hemat",
  },
  description:
    "Mengembangkan hunian perumahan dengan rumah sehat, speck hebat, dan harga hemat. Sehingga terwujud pemukiman yang aman, nyaman, dan lingkungan yang asri. Memberikan kepuasan kepada konsumen dengan menjaga kualitas bangunan yang dapat diandalkan. Perumahan Sakinah Residence No. 01 Sumberanyar, Paiton, Kab. Probolinggo",
  generator: "Sakinah Residence",
  applicationName: "Website Sakinah Residence",
  keywords: [
    "Perumahan murah di Probolinggo",
    "Subsidi perumahan di Probolinggo",
    "Perumahan terjangkau di Probolinggo",
    "Perumahan bersubsidi Probolinggo",
    "Hunian murah di Sakinah Residence",
    "Subsidi perumahan Sakinah Residence",
    "Perumahan terjangkau Sakinah Residence",
    "Perumahan bersubsidi Sakinah Residence",
    "Rumah murah di Probolinggo",
    "Perumahan sederhana Probolinggo",
    "Hunian nyaman di Sakinah Residence",
    "Infrastruktur lengkap di Probolinggo",
    "Keamanan terjamin di Sakinah Residence",
    "Fasilitas lengkap di Probolinggo",
    "Cluster perumahan di Probolinggo",
    "Proyek perumahan Probolinggo",
    "Investasi properti Probolinggo",
    "Perumahan ramah lingkungan di Probolinggo",
    "Perumahan modern Sakinah Residence",
    "Developer terpercaya di Probolinggo",
  ],
  creator: "Sakinah Residence",
  publisher: "Sakinah Residence",
  colorScheme: "light dark",
  themeColor: "#ffffff",
  metadataBase: new URL('https://sakinahresidence.com'),
  alternates: {
    canonical: "/",
    languages: {
      id: "/",
    }
  },
  openGraph: {
    title: "Sakinah Residence - Rumah Sehat Spek Hebat Harga Hemat",
    description:
      "Mengembangkan hunian perumahan dengan rumah sehat, speck hebat, dan harga hemat. Sehingga terwujud pemukiman yang aman, nyaman, dan lingkungan yang asri. Memberikan kepuasan kepada konsumen dengan menjaga kualitas bangunan yang dapat diandalkan. Perumahan Sakinah Residence No. 01 Sumberanyar, Paiton, Kab. Probolinggo",
    url: "https://sakinahresidence.com",
    siteName: "Sakinah Residence",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "https://sakinahresidence.com/images/sakinah-1.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <Info />
      <Product />
      <Faq />
      {/* <Branding /> */}
    </>
  );
}
