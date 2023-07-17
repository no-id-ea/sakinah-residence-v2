import Image from "next/image";

import { ImageSwiperProps } from "@/types";

const ImageSwiper = ({ src, alt }: ImageSwiperProps) => {
  return (
    <div className="flex w-full h-full unset-img">
      <Image
        src={src}
        alt={alt}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center w-full h-full custom-img"
      />
    </div>
  );
};

export default ImageSwiper;
