import { ProductCard } from "@/components";
import { product, products } from "@/constants";

const ProductBrand = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-full py-20 max-h-[1500px] gradient-product">
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
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductBrand;
