import ProductCard from "@/components/ProductCard";
import { product, products } from "@/constants";

const Product = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-screen pt-20 bg-gradient-to-bl from-wood-2 to-wood">
      <div className="flex flex-col w-full max-w-[1046px] items-center pb-[105px]">
        <h2 className="font-lato font-bold text-[48px] text-shadow text-center pb-[21px]">
          {product.title}
        </h2>
        <p className="font-lato font-medium text-[24px] text-gandalf text-center">
          {product.description}
        </p>
      </div>

      <div className="flex flex-row items-center justify-center space-x-10 w-full max-w-[1331px]">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
