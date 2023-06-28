import { BannerProps } from "@/types";
import { textStyles } from "@/constants";

import { Navbar } from "@/components";

const Banner = ({ owner, title, subtitle, buttonText }: BannerProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-5 py-5 bg-center bg-cover text-snow bg-banner-hero">
      <Navbar />

      <div className="flex flex-col items-center justify-center object-center w-full max-w-[1440px]">
        <p className={`${textStyles["body-3"]}`}>{owner}</p>
        <div className="flex flex-col items-center justify-start w-full">
          <h1 className={`${textStyles["heading-1"]}`}>{title}</h1>
          <h1 className={`${textStyles["heading-1"]}`}>{subtitle}</h1>
        </div>
        <button className={`py-[20px] px-[16px] bg-orange rounded-[5px] mt-[68px] ${textStyles["body-3"]}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
