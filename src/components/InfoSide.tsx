import { InfoSideProps } from "@/types";

import Image from "next/image";

const InfoSide = ({ description, title, image, reverse }: InfoSideProps) => {
  return (
    <div
      className={`flex w-full h-full max-w-[ 1440px] items-center justify-between gap-10 ${
        reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      }`}
    >
        <div className="flex items-center justify-center h-full unset-img">
          <Image
            src={image}
            alt={title}
            fill={true} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="custom-img object-cover rounded-[20px]"
          />
        </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="font-lato font-semibold text-[28px] md:text-[30px] lg:text-[48px] text-shadow">{title}</h2>
        <p className="font-lato font-normal text-[18px] md:text-[20px] lg:text-[24px] text-gandalf">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoSide;
