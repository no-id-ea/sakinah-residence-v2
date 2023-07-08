import { ProductCardProps } from "@/types";
import { BsWhatsapp } from "react-icons/bs";

const ProductCard = ({ title, description, children, image }: ProductCardProps) => {
  return (
    <section className="flex flex-col space-y-5">
      <div className="relative group flex min-h-[600px] max-h-[700px] min-w-[300px] max-w-[400px] items-end justify-end bg-product-card rounded-[10px] bg-center bg-cover cursor-pointer transform scale-95 hover:scale-100 hover:brightness-125 transition-all ease-in duration-300">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col items-start justify-end px-5 py-5 backdrop-blur-sm rounded-[10px]">
            <p className="font-lato font-medium text-[24px] text-snow group-hover:scale-105 transition-all duration-300 ease-in">
              {title}
            </p>
            <p className="font-lato font-normal text-[20px] text-snow-2 group-hover:scale-105 transition-all duration-300 ease-in">
              {description}
            </p>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
};

export default ProductCard;