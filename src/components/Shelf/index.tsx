'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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
        <Swiper
          loop={true}
          modules={[Navigation]}
          navigation
          breakpoints={{
            1600: {
              slidesPerView: 5,
            },
            1360: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          className="mySwiperShelf"
        >
          {' '}
          <SwiperSlide>
            <ProductOne />
          </SwiperSlide>
          <SwiperSlide>
            <ProductTwo />
          </SwiperSlide>
          <SwiperSlide>
            <ProductOne />
          </SwiperSlide>
          <SwiperSlide>
            <ProductTwo />
          </SwiperSlide>
          <SwiperSlide>
            <ProductOne />
          </SwiperSlide>
          <SwiperSlide>
            <ProductTwo />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Shelf;
