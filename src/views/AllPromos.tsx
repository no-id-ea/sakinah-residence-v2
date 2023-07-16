import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/id";

import { FacilitiesCard, PromoCard } from "@/components";
import { PromoProps } from "@/types";

import { facilities } from "@/constants";

interface PromosProps {
  promos: PromoProps[];
}

dayjs.locale("id");

const AllPromos = ({ promos }: PromosProps) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full py-20 bg-white text-shadow">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-[1440px] px-14 gap-10 bg-transparent">
        <div className="grid w-full h-full gap-10 auto-rows-auto md:grid-cols-2 lg:grid-cols-3">
          {promos.map((promo, idx) => (
            <PromoCard
              key={idx}
              {...promo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllPromos;
