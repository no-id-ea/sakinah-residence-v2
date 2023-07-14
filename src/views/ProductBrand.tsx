import Link from "next/link";
import { product, products } from "@/constants";

const ProductBrand = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-full py-20 md:py-28 lg:py-32 gradient-product">
      <div className="flex flex-col w-full max-w-[1440px] items-center pb-10 md:pb-16 lg:pb-24 px-14">
        <h2 className="pb-10 text-4xl font-bold text-center font-lato md:text-5xl lg:text-6xl text-shadow">
          {product.title}
        </h2>
        <p className="text-lg font-medium text-center font-lato md:text-xl lg:text-2xl text-gandalf">
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
        </div>
      </div>
    </section>
  );
};

export default ProductBrand;
