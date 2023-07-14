import { bannerText } from "@/constants";
import { CustomBannerProps } from "@/types";

const CustomBanner = ({ title }: CustomBannerProps) => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-center bg-cover max-h-[1000px] text-snow bg-banner-hero">
      <div className="flex flex-col items-center justify-center object-center w-full max-w-[1440px] px-14 py-10">
        <h1 className="text-4xl font-semibold tracking-wider capitalize font-general md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CustomBanner;
