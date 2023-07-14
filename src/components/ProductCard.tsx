import Link from "next/link";

import { ProductCardProps } from "@/types";

const ProductCard = ({ title, description, children, href }: ProductCardProps) => {
  return (
    <div className="flex flex-col w-full h-full space-y-5">
      <Link href={href} className="relative group flex w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] items-end justify-end bg-product-card rounded-[10px] bg-center bg-cover cursor-pointer transform scale-95 hover:scale-100 hover:brightness-125 transition-all ease-in duration-300">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col items-start justify-end px-5 py-5 backdrop-blur-sm rounded-[10px]">
            <p className="font-lato font-bold text-[20px] md:text-[24px] text-snow group-hover:scale-105 transition-all duration-300 ease-in">
              {title}
            </p>
            <p className="font-lato font-normal text-[14px] md:text-[16px] text-snow-2 group-hover:scale-105 transition-all duration-300 ease-in">
              {description}
            </p>
          </div>
        </div>
      </Link>

      <div className="hidden w-full scale-95 md:flex">
        {children}
      </div>
    </div>
  );
};

export default ProductCard;