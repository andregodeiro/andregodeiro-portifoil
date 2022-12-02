import React from "react";
import { SwiperSlide } from "swiper/react";
import ImgCarousel from "../ImgCarousel/ImgCarousel.tsx";
import {
  ProjCarousel,
  ProjContainer,
  ProjDescription,
  ProjTitle,
} from "./styles";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Project = ({
  title,
  description,
  img1,
  img2,
  img3,
  img4,
  img5,
}) => {
  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };
  return (
    <ProjContainer>
      <ProjTitle>{title}</ProjTitle>
      <ProjDescription>{description}</ProjDescription>
      <ProjCarousel>
        <ImgCarousel settings={settings}>
          <SwiperSlide>
            <img src={img1}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4}></img>
          </SwiperSlide>
        </ImgCarousel>
      </ProjCarousel>
    </ProjContainer>
  );
};
