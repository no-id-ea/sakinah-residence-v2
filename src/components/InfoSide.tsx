import { InfoSideProps } from "@/types";

import Image from "next/image";

const InfoSide = ({ description, title, image, reverse }: InfoSideProps) => {
  return (
    <div className={`flex w-full max-w-[1440px] items-center justify-center gap-40 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <Image src={image} width={400} height={400} alt="Info Side" className="object-contain rounded-[20px]" />
      <div className="flex flex-col items-start justify-start w-full max-w-[555px] h-full">
        <h2 className="font-lato font-bold text-[48px]">{title}</h2>
        <p className="font-lato font-medium text-[24px]">{description}</p>
      </div>
    </div>
  );
};

export default InfoSide;
