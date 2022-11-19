import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import carrouselData from "../public/data/carrousel-data.json";
import CarrouselSlide from "./CarrouselSlide";

const Carrousel = () => {
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          autoplay={{ delay: 5000 }}
          loop={true}
          effect="fade"
          speed={1000}
        >
          {carrouselData &&
            carrouselData.map((slide, index) => {
              return (
                <SwiperSlide key={slide.id}>
                  <CarrouselSlide
                    data={slide}
                    key={slide.id}
                    sliderClass="swiper-slide"
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carrousel;
