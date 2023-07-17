import { SwiperContainer } from "@/components";
import { SwiperContainerProps } from "@/types";

const ProductSwiper = ({ images }: SwiperContainerProps) => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-center bg-cover max-h-[1000px]">
      <div className="flex flex-col items-center justify-center object-center w-full">
        <SwiperContainer 
          images={images}
        />
      </div>
    </section>
  );
};

export default ProductSwiper;
