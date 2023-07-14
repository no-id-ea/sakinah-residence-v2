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
        <BsWhatsapp className="text-[14px] lg:text-[18px] text-snow" />
        <span className="font-montserrat font-semibold text-[18px] text-snow">
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
        {products.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            description={item.description}
            href={item.href}
            image={item.image}
          >
            <AskMarketing />
          </ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Product;
