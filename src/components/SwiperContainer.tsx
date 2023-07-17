"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { SwiperContainerProps } from "@/types";
import { ImageSwiper } from ".";

const SwiperContainer = ({ images }: SwiperContainerProps) => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          <ImageSwiper src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperContainer;
