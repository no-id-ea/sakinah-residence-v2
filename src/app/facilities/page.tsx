import { Metadata } from "next";
import { CustomBanner, Facilities as FacilitiesView, Footer } from "@/views";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Facilities - Sakinah Residence",
  description: "This is sakinah residence facilities",
};

export default function Facilities() {
  return (
    <>
      <Navbar activeNav="/facilities" />
      <CustomBanner title="Fasilitas" />
      <FacilitiesView />
      <Footer />
    </>
  );
}
