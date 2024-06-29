'use client';

import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import ProductOne from './components/ProductOne';
import ProductTwo from './components/ProductTwo';

import './style.global.css';

function Shelf() {
  return (
    <>
      <h1 className="shelf-title">
        <strong>As Mais Pedidas</strong>
      </h1>
      <section className="shelf-section">
        {/* <Swiper
          loop={true}
          breakpoints={{
            960: {
              slidesPerView: 5,
            },
          }}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          // <SwiperSlide> */}
        <ProductOne />
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        <ProductTwo />
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        <ProductOne />
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        <ProductTwo />
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        <ProductOne />
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
        {/* <ProductTwo /> */}
        {/* </SwiperSlide> */}
        {/* </Swiper> */}
      </section>
    </>
  );
}

export default Shelf;
