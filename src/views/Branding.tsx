import React from "react";
import Image from "next/image";

const Branding = () => {
  return (
    <div className="flex items-center justify-center w-full h-full max-h-[500px] pt-10 pl-10 bg-furniture text-snow">
      <div className="flex flex-row items-center max-w-[1440px] justify-between w-full h-full">
        <div className="flex flex-col items-start justify-start w-full h-full space-y-5">
          <h2 className="font-lato font-bold text-[48px]">
            Siap untuk meningkatkan kualitas hidup Anda?
          </h2>
          <p className="font-lato font-medium text-[24px]">
            Jangan sia-siakan momen ini. Hubungi kami sekarang dan mari wujudkan
            rumah impian Anda.
          </p>
          <button className="py-[20px] px-[16px] bg-orange rounded-[5px] font-montserrat font-semibold text-[18px]">
            Hubungi Kami
          </button>
        </div>

        <div className="relative w-full h-full min-h-[412px] max-h-[500px] items-center justify-center">
          <Image
            src={"/Image-3.png"}
            alt="Branding Perumahan Sakinah Residence"
            fill={true}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Branding;
