'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import './style.global.css';

function Brands() {
  return (
    <>
      <h1 className="brands-title">
        <strong>Marcas Parceiras</strong>
      </h1>
      <section className="brands-section">
        <Swiper
          loop={true}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
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
          className="mySwiper"
        >
          <SwiperSlide>
            {' '}
            <Image
              src="/brands/comma.png"
              width={307}
              height={64}
              alt="logo da marca comma"
              quality={100}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Image
              src="/brands/melissa.png"
              width={307}
              height={64}
              alt="logo da marca melissa"
              quality={100}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Image
              src="/brands/forever-21.png"
              width={307}
              height={64}
              alt="logo da marca forever 21"
              quality={100}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Image
              src="/brands/zara.png"
              width={307}
              height={64}
              alt="logo da marca zara"
              quality={100}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Image
              src="/brands/ann-taylor.png"
              width={307}
              height={64}
              alt="logo da marca ann taylor"
              quality={100}
              sizes="100vw"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Brands;
