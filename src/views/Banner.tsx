import { bannerText } from "@/constants";

const Banner = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-center bg-cover max-h-[1000px] text-snow bg-banner-hero">
      <div className="flex flex-col items-center justify-center object-center w-full max-w-[1440px] px-10 py-10">
        <p className="font-montserrat font-semibold text-[18px] text-center text-snow-2">
          {bannerText.owner}
        </p>
        <div className="flex flex-col items-center justify-start w-full max-w-[913px]">
          <h1 className="font-general font-semibold text-[64px] text-center text-snow">
            {bannerText.title}
          </h1>
        </div>
        <button className="py-[20px] px-[16px] bg-orange rounded-[5px] mt-[68px] font-montserrat font-semibold text-[18px] hover:bg-orange-2 duration-150 transition-all ease-in-out">
          {bannerText.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Banner;
