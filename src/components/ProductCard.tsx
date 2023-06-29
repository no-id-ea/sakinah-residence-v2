import { ProductCardProps } from "@/types";
import { BsWhatsapp } from "react-icons/bs";


const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col w-full h-full min-h-[800px] max-w-[360px] items-start justify-end bg-product-card rounded-[10px] bg-center bg-cover">
        <div className="flex flex-col items-start justify-end px-5 py-5 backdrop-blur-sm">
          <p className="font-lato font-medium text-[24px] text-snow">{title}</p>
          <p className="font-lato font-normal text-[20px] text-snow-2">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full space-x-2 max-w-350 bg-orange rounded-[5px] py-[12px]">
        <BsWhatsapp className="text-[20px] text-snow" />
        <span className="font-montserrat font-semibold text-[18px] text-snow">TANYA MARKETING</span>
      </div>
    </div>
  );
};

export default ProductCard;
