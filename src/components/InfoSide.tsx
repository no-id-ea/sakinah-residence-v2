import { InfoSideProps } from "@/types";

import Image from "next/image";

const InfoSide = ({ description, title, image, reverse }: InfoSideProps) => {
  return (
    <div
      className={`flex w-full max-w-[1440px] items-center justify-between gap-20 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative w-8/12 h-full min-h-[480px] max-h-[500px] items-center justify-center">
          <Image
            src={image}
            alt={title}
            fill={true}
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="font-lato font-bold text-[48px] text-shadow">{title}</h2>
        <p className="font-lato font-medium text-[24px] text-gandalf">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoSide;
