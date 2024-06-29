'use client';

import React from 'react';
import Image from 'next/image';

import './style.global.css';

// import { Swiper, SwiperSlide } from "swiper/react";

function Brands() {
  return (
    <>
      <h1 className="brands-title">
        <strong>Marcas Parceiras</strong>
      </h1>
      <section className="brands-section">
        {/* <Swiper
          spaceBetween={30}
          loop={true}
          breakpoints={{
            960: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        > */}
        {/* <SwiperSlide><img src="comma.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="melissa.png" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="forever-21.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="zara.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="ann-taylor.png" alt="" /></SwiperSlide>
        </Swiper> */}
        <Image
          src="/brands/comma.png"
          width={307}
          height={64}
          alt="banner principal"
          quality={80}
          sizes="100vw"
        />
        <Image
          src="/brands/melissa.png"
          width={307}
          height={64}
          alt="banner principal"
          quality={80}
          sizes="100vw"
        />
        <Image
          src="/brands/forever-21.png"
          width={307}
          height={64}
          alt="banner principal"
          quality={80}
          sizes="100vw"
        />
        <Image
          src="/brands/zara.png"
          width={307}
          height={64}
          alt="banner principal"
          quality={80}
          sizes="100vw"
        />
        <Image
          src="/brands/ann-taylor.png"
          width={307}
          height={64}
          alt="banner principal"
          quality={80}
          sizes="100vw"
        />
      </section>
    </>
  );
}

export default Brands;
