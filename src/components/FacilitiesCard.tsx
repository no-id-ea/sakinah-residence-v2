import { FacilitiesCardProps } from "@/types";
import Image from "next/image";

const FacilitiesCard = ({ image, title }: FacilitiesCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-5 py-5 transition-all duration-150 ease-in rounded-lg bg-wood drop-shadow-lg hover:bg-wood-2">
      <div className="relative flex items-center justify-center w-24 h-24 px-2 py-2">
        <Image
          src={image}
          alt={title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center"
        />
      </div>
      <p className="font-lato font-medium text-[20px] md:text-[24px] text-shadow text-center pt-5">
        {title}
      </p>
    </div>
  );
};

export default FacilitiesCard;
