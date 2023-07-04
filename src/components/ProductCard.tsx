import { ProductCardProps } from "@/types";
import { BsWhatsapp } from "react-icons/bs";

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <section className="flex flex-col space-y-5 group">
      <div className="relative flex min-h-[800px] min-w-[350px] max-w-[420px] items-end justify-end bg-product-card rounded-[10px] bg-center bg-cover brightness-50 cursor-pointer hover:brightness-100 duration-300">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col items-start justify-end px-5 py-5 backdrop-blur-sm rounded-[10px]">
            <p className="font-lato font-medium text-[24px] text-snow group-hover:scale-105 transition-all duration-300 ease-in-out">
              {title}
            </p>
            <p className="font-lato font-normal text-[20px] text-snow-2 group-hover:scale-105 transition-all duration-300 ease-in-out">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full space-x-2 cursor-pointer max-w-350 bg-orange rounded-[5px] py-[12px] hover:bg-orange-2 duration-150 transition-all ease-in-out">
        <BsWhatsapp className="text-[20px] text-snow" />
        <span className="font-montserrat font-semibold text-[18px] text-snow">
          TANYA MARKETING
        </span>
      </div>
    </section>
  );
};

export default ProductCard;
