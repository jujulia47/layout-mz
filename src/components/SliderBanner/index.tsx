'use client';

import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import './style.global.css';

function SliderBanner() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
        }}
        className="mySwiperBanner"
      >
        <SwiperSlide>
          <Image
            src={
              isMobile
                ? '/banners/banner-principal-mob.png'
                : '/banners/banner-principal-desk.png'
            }
            width={1920}
            height={600}
            alt="banner principal"
            quality={100}
            sizes="100vw"
            className="banner-principal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              isMobile
                ? '/banners/banner-principal-mob.png'
                : '/banners/banner-principal-desk.png'
            }
            width={isMobile ? 720 : 1920}
            height={isMobile ? 639 : 600}
            alt="banner principal"
            quality={100}
            sizes="100vw"
            className="banner-principal"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderBanner;
