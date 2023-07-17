import { bannerText } from "@/constants";

const Banner = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-center bg-cover max-h-[1000px] text-snow bg-banner-hero">
      <div className="flex flex-col items-center justify-center object-center w-full max-w-[1440px] px-10 py-10">
        <p className="text-lg font-normal text-center font-lato md:text-xl lg:text-2xl text-snow-2">
          {bannerText.owner}
        </p>
        <div className="flex flex-col items-center justify-start w-full max-w-[913px]">
          <h1 className="text-4xl font-semibold text-center font-general md:text-5xl lg:text-6xl text-snow">
            {bannerText.title}
          </h1>
        </div>
        <a href="#get-started" className="py-[20px] px-[16px] bg-orange rounded-[5px] mt-[68px] font-montserrat font-normal text-lg md:text-xl lg:text-2xl hover:bg-orange-2 duration-150 transition-all ease-in-out">
          {bannerText.buttonText}
        </a>
      </div>
    </section>
  );
};

export default Banner;
