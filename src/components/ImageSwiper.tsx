import Image from "next/image";

import { ImageSwiperProps } from "@/types";

const ImageSwiper = ({ src, alt }: ImageSwiperProps) => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{ width: '100%', height: '100%' }}
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
};

export default ImageSwiper;
