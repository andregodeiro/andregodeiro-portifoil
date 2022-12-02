import React, { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination, A11y } from "swiper";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function ImgCarousel({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
