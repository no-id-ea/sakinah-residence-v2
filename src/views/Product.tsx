import Link from "next/link";
import { ProductCard, YellowButton } from "@/components";
import { BsWhatsapp } from "react-icons/bs";

import { product, products, whatsapp } from "@/constants";

const AskMarketing = () => {
  return (
    <YellowButton>
      <Link
        href={whatsapp}
        className="flex flex-row items-center justify-center w-full gap-1"
      >
        <BsWhatsapp className="text-[16px] text-snow" />
        <span className="font-montserrat font-semibold text-[14px] text-snow">
          TANYA MARKETING
        </span>
      </Link>
    </YellowButton>
  );
};

const Product = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-full py-4 md:py-6 lg:py-10 gradient-product">
      <div className="flex flex-col w-full max-w-[1440px] items-center pb-10 md:pb-16 lg:pb-24 px-14">
        <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-[48px] text-shadow text-center pb-5 md:pb-8 lg:pb-10">
          {product.title}
        </h2>
        <p className="font-lato font-normal text-[18px] md:text-[20px] lg:text-[24px] text-gandalf text-center">
          {product.description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-x-0 space-y-5 md:space-y-0 md:space-x-3 w-full max-w-[1440px] px-14">
        <div className="flex flex-col w-full h-full space-y-5">
          <Link
            href={products[0].href}
            className="relative group flex w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] items-end justify-end rounded-[10px] bg-center bg-cover bg-product-1 cursor-pointer transform scale-95 hover:scale-100 hover:brightness-125 transition-all ease-in duration-300"
          >
            <div className="flex flex-col w-full h-full">
              <div className="flex flex-col items-start justify-end px-5 py-5 rounded-[10px]">
                <p className="font-lato font-bold text-[20px] md:text-[24px] text-snow group-hover:scale-105 transition-all duration-300 ease-in">
                  {products[0].title}
                </p>
                <p className="font-lato font-normal text-[14px] md:text-[16px] text-snow-2 group-hover:scale-105 transition-all duration-300 ease-in">
                  {products[0].description}
                </p>
              </div>
            </div>
          </Link>

          <div className="hidden w-full scale-95 md:flex">{
            <AskMarketing />
          }</div>
        </div>

        <div className="flex flex-col w-full h-full space-y-5">
          <Link
            href={products[1].href}
            className="relative group flex w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] items-end justify-end rounded-[10px] bg-center bg-cover bg-product-2 cursor-pointer transform scale-95 hover:scale-100 hover:brightness-125 transition-all ease-in duration-300"
          >
            <div className="flex flex-col w-full h-full">
              <div className="flex flex-col items-start justify-end px-5 py-5 rounded-[10px]">
                <p className="font-lato font-bold text-[20px] md:text-[24px] text-snow group-hover:scale-105 transition-all duration-300 ease-in">
                  {products[1].title}
                </p>
                <p className="font-lato font-normal text-[14px] md:text-[16px] text-snow-2 group-hover:scale-105 transition-all duration-300 ease-in">
                  {products[1].description}
                </p>
              </div>
            </div>
          </Link>

          <div className="hidden w-full scale-95 md:flex">{
            <AskMarketing />
          }</div>
        </div>

        <div className="flex flex-col w-full h-full space-y-5">
          <Link
            href={products[2].href}
            className="relative group flex w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] items-end justify-end rounded-[10px] bg-center bg-cover bg-product-3 cursor-pointer transform scale-95 hover:scale-100 hover:brightness-125 transition-all ease-in duration-300"
          >
            <div className="flex flex-col w-full h-full">
              <div className="flex flex-col items-start justify-end px-5 py-5 rounded-[10px]">
                <p className="font-lato font-bold text-[20px] md:text-[24px] text-snow group-hover:scale-105 transition-all duration-300 ease-in">
                  {products[2].title}
                </p>
                <p className="font-lato font-normal text-[14px] md:text-[16px] text-snow-2 group-hover:scale-105 transition-all duration-300 ease-in">
                  {products[2].description}
                </p>
              </div>
            </div>
          </Link>

          <div className="hidden w-full scale-95 md:flex">{
            <AskMarketing />
          }</div>
        </div>
      </div>
    </section>
  );
};

export default Product;
