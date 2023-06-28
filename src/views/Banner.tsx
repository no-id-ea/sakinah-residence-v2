import { BannerProps } from "@/types";

import { Navbar } from "@/components";

const Banner = ({ owner, title, subtitle, buttonText }: BannerProps) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-center bg-cover text-snow bg-banner-hero">
      <Navbar />

      <div className="flex flex-col items-center justify-center object-center w-full h-full">
        <p className="text-[24px] font-semibold font-montserrat mb-[11px]">{owner}</p>
        <div className="flex flex-col items-center justify-start w-full">
          <h1 className="text-[64px] font-semibold font-general">{title}</h1>
          <h1 className="text-[64px] font-semibold font-general">{subtitle}</h1>
        </div>
        <button className="py-[20px] px-[16px] bg-orange rounded-[5px] font-montserrat font-semibold text-[18px] mt-[68px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
