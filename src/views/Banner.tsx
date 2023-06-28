import { BannerProps } from "@/types";

import { Navbar } from "@/components";

const Banner = ({ owner, title, subtitle, buttonText }: BannerProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-5 py-5 bg-center bg-cover text-snow bg-banner-hero">
      <Navbar />

      <div className="flex flex-col items-center justify-center object-center w-full max-w-[1440px]">
        <p className="font-montserrat font-semibold text-[18px]">{owner}</p>
        <div className="flex flex-col items-center justify-start w-full">
          <h1 className="font-general font-semibold text-[64px]">{title}</h1>
          <h1 className="font-general font-semibold text-[64px]">{subtitle}</h1>
        </div>
        <button className="py-[20px] px-[16px] bg-orange rounded-[5px] mt-[68px] font-montserrat font-semibold text-[18px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
