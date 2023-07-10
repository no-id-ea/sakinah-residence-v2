import Link from "next/link";
import { ProductCard, YellowButton } from "@/components";
import { BsWhatsapp } from "react-icons/bs";

import { product, products, whatsapp } from "@/constants";

const AskMarketing = () => {
  return (
    <YellowButton>
      <Link
        href={whatsapp}
        className="flex flex-row items-center justify-center gap-3"
      >
        <BsWhatsapp className="text-[20px] text-snow" />
        <span className="font-montserrat font-semibold text-[18px] text-snow">
          TANYA MARKETING
        </span>
      </Link>
    </YellowButton>
  );
};

const Product = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-full pt-20 max-h-[1500px] gradient-product">
      <div className="flex flex-col w-full max-w-[1440px] items-center pb-32 px-10">
        <h2 className="font-lato font-bold text-[48px] text-shadow text-center pb-10">
          {product.title}
        </h2>
        <p className="font-lato font-medium text-[24px] text-gandalf text-center">
          {product.description}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between space-x-10 w-full max-w-[1440px] px-10">
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
