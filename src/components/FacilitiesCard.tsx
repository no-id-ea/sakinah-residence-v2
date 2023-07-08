import { FacilitiesCardProps } from "@/types";
import Image from "next/image";

const FacilitiesCard = ({ image, title }: FacilitiesCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-wood rounded-[5px] px-5 py-5 transition-all duration-150 ease-in hover:bg-wood-2">
      <div className="flex relative px-2 py-2 h-40 w-40 items-center justify-center">
        <Image src={image} alt={title} fill={true} className="object-contain object-center" />
      </div>
      <p className="font-lato font-medium text-[24px] text-center pt-5">{title}</p>
    </div>
  );
};

export default FacilitiesCard;
