import { Metadata } from "next";
import { GetServerSideProps } from "next";
import { CustomBanner, AllPromos } from "@/views";
import axios from "axios";

import { PromoProps } from "@/types";
import { api } from "@/constants";

export const metadata: Metadata = {
  title: "Promo - Sakinah Residence",
  description: "This is sakinah residence contacts",
};


async function getPromos(): Promise<PromoProps[]> {
  const response = await axios.get<PromoProps[]>(api);
  const promos = response.data;

  return promos;
}

export default async function Promos() {
  const promos = await getPromos();
  
  return (
    <>
      <CustomBanner title="Promo" />
      <AllPromos promos={promos} />
    </>
  );
}
