import  { FaLocationDot } from "react-icons/fa6"

import { LocationDetailProps } from "@/types";

const LocationDetail = ({ address, gmaps, title, reverse }: LocationDetailProps) => {
  return (
    <div className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} gap-28 items-center justify-center w-full h-full min-h-[400px] my-12`}>
      <div className="flex flex-col items-start justify-center h-full">
        <p className="font-lato font-medium text-[24px] text-grey">
          Lokasi Komplek
        </p>
        <h3 className="font-lato font-bold text-[48px] text-shadow">{title}</h3>
        <div className="flex flex-row items-start justify-start w-full space-x-5">
          <FaLocationDot className="text-[24px] text-shadow" />
          <p className="font-lato font-normal text-[20px] text-grey">
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
