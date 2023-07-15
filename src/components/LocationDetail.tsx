import  { FaLocationDot } from "react-icons/fa6"

import { LocationDetailProps } from "@/types";

const LocationDetail = ({ address, gmaps, title, reverse }: LocationDetailProps) => {
  return (
    <div className={`flex ${reverse ? "flex-col gap-5 md:flex-row-reverse md:gap-20" : "flex-col gap-5 md:flex-row md:gap-20"} items-center justify-center w-full h-full min-h-[400px] my-12`}>
      <div className="flex flex-col items-start justify-center h-full">
        <p className="text-base font-normal font-lato md:text-lg text-grey">
          Lokasi Komplek
        </p>
        <h3 className="text-2xl font-bold font-lato md:text-3xl lg:text-4xl text-shadow">{title}</h3>
        <div className="flex flex-row items-start justify-start w-full space-x-5">
          <FaLocationDot className="text-[24px] text-shadow" />
          <p className="text-base font-normal font-lato md:text-lg lg:text-xl text-grey">
            {address}
          </p>
        </div>
      </div>
      <iframe
        src={gmaps}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full min-h-[400px] rounded-lg drop-shadow-lg"
      />
    </div>
  );
};

export default LocationDetail;
