import { PromoProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

import { whatsapp } from "@/constants";

const Promo = ({ acf, date }: PromoProps) => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-full py-10 md:py-14 lg:py-20 gradient-product">
      <div className="flex flex-col space-y-5 w-full max-w-[1440px] items-center px-14">
        <div className="flex w-full h-full unset-img">
          <Image
            src={acf.image.url}
            alt={acf.image.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="custom-img object-cover object-center rounded-lg"
          />
        </div>

        <div className="flex w-full h-full flex-col items-start justify-start space-y-1">
          <span className="px-2 py-1 text-xs rounded-lg font-lato text-snow lg:text-sm bg-orange">
            PROMO
          </span>
          <h2 className="text-lg font-bold font-lato md:text-xl lg:text-2xl text-shadow">
            {acf.publisher}
          </h2>
          <div className="w-full h-full border-b-2 border-shadow" />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: acf.information }}
          className="flex flex-col space-y-1 w-full h-full items-start justify-start font-lato font-normal text-base"
        ></div>

        <Link href={whatsapp}>
          <button className="flex flex-row items-center justify-center space-x-1 cursor-pointer bg-leaf rounded-[5px] px-3 py-[12px] hover:bg-leaf-2 duration-150 transition-all ease-in-out">
            <BsWhatsapp className="text-lg md:text-xl text-snow" />
            <span className="px-5 text-base font-semibold font-montserrat md:text-lg text-snow ">
              Tanyakan Informasi Promo
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Promo;
