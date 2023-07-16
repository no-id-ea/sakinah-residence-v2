/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/id";

import { PromoProps } from "@/types";

dayjs.locale("id");

const PromoCard = ({ acf, date, slug }: PromoProps) => {
  return (
    <Link href={`/promos/${slug}`} className="w-full duration-150 ease-in-out shadow-xl cursor-pointer card card-compact bg-wood hover:bg-wood-2">
      <figure>
        <img src={acf.image.url} alt={acf.image.name} />
      </figure>
      <div className="card-body">
        <div className="w-full">
          <span className="px-2 py-1 text-xs rounded-lg font-lato text-snow lg:text-sm bg-orange">
            PROMO
          </span>
        </div>
        <h2 className="text-lg font-bold font-lato md:text-xl lg:text-2xl text-shadow">
          {acf.publisher}
        </h2>
        <p className="text-base md:text-lg text-shadow">
          {dayjs(date).format("DD MMM YYYY")}
        </p>
      </div>
    </Link>
  );
};

export default PromoCard;

// <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-150 ease-in rounded-lg bg-wood drop-shadow-lg hover:bg-wood-2">
//   <div className="relative flex items-center justify-center w-full h-40 bg-red-400 rounded-lg unset-img">
//     <p>This is image placeholder</p>
//     {/* <Image
//       src={image.url}
//       alt={image.name}
//       fill={true}
//       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       className="object-cover object-center rounded-lg custom-img"
//     /> */}
//   </div>

//   <div className="flex flex-col items-start justify-start w-full h-full px-2 py-2 space-y-2 bg-blue-400">
//     <span className="px-2 py-1 rounded-lg font-lato text-snow text-[14px] bg-orange">
//       PROMO
//     </span>
//     <h2 className="card-title font-lato text-[24px] font-bold text-shadow">
//       {title}
//     </h2>
//     <p>{dayjs(date).format("DD MMM YYYY")}</p>
//   </div>
// </div>
