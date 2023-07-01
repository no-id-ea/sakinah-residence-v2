import { InfoSideProps } from "@/types";

import Image from "next/image";

const InfoSide = ({ description, title, image, reverse }: InfoSideProps) => {
  return (
    <div className={`flex w-full max-w-[1440px] items-center justify-between gap-20 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`flex items-center ${reverse ? 'justify-start' : 'justify-end'} w-full h-full`}>
        <Image src={image} width={400} height={400} alt="Info Side" className="object-cover rounded-[20px]" />
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <h2 className="font-lato font-bold text-[48px] text-shadow">{title}</h2>
        <p className="font-lato font-medium text-[24px] text-gandalf">{description}</p>
      </div>
    </div>
  );
};

export default InfoSide;
