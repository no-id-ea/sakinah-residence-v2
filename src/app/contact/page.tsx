import { Metadata } from "next";
import { CustomBanner, Contact } from "@/views";

export const metadata: Metadata = {
  title: "Contacts - Sakinah Residence",
  description: "This is sakinah residence contacts",
};

export default function Contacts() {
  return (
    <>
      <CustomBanner title="Kontak" />
      <Contact />
    </>
  );
}
