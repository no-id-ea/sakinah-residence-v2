import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/id";

import { PromoProps } from "@/types";

interface PromosProps {
  promos: PromoProps[];
}

dayjs.locale("id");

const AllPromos = ({ promos }: PromosProps) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full py-20 bg-white text-shadow">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-[1440px] px-10 gap-10 bg-transparent">
        <div className="grid w-full h-full gap-10 auto-rows-auto md:grid-cols-4">
          {promos.map((promo, idx) => (
            <div className="flex flex-col space-y-2 w-80 h-80 drop-shadow-xl bg-wood" key={idx}>
              <figure className="relative w-full h-full min-h-[200px] min-w-[200px] rounded-xl">
                <Image
                  src={promo.acf.image.url}
                  alt={promo.acf.image.name}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full rounded-xl"
                />
              </figure>
              <div className="flex flex-col items-start justify-start w-full h-full px-2 py-2 space-y-2">
                <span className="px-2 py-1 rounded-lg font-lato text-snow text-[14px] bg-orange">
                  PROMO
                </span>
                <h2 className="card-title font-lato text-[24px] font-bold text-shadow">
                  {promo.acf.publisher}
                </h2>
                <p>{dayjs(promo.date).format("DD MMM YYYY")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllPromos;
