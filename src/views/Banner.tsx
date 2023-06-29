import { bannerText } from "@/constants";

import { Navbar } from "@/components";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-5 py-5 bg-center bg-cover text-snow bg-banner-hero">
      <Navbar />

      <div className="flex flex-col items-center justify-center object-center w-full max-w-[1440px]">
        <p className="font-montserrat font-semibold text-[18px] text-center text-snow-2">
          {bannerText.owner}
        </p>
        <div className="flex flex-col items-center justify-start w-full max-w-[913px]">
          <h1 className="font-general font-semibold text-[64px] text-center text-snow">
            {bannerText.title}
          </h1>
        </div>
        <button className="py-[20px] px-[16px] bg-orange rounded-[5px] mt-[68px] font-montserrat font-semibold text-[18px]">
          {bannerText.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
