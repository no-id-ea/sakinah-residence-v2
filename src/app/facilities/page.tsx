import { Metadata } from "next";
import { CustomBanner, Facilities as FacilitiesView } from "@/views";

export const metadata: Metadata = {
  title: "Facilities - Sakinah Residence",
  description: "This is sakinah residence facilities",
};

export default function Facilities() {
  return (
    <>
      <CustomBanner title="Fasilitas" />
      <FacilitiesView />
    </>
  );
}
