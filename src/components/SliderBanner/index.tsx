'use client';

import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
// import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

import './style.global.css';

function SliderBanner() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      {/* <Swiper
        breakpoints={{
          960: {
            slidesPerView: 1,
          },
        }}
        navigation
        modules={[Navigation]}
        className='mySwiper'
      >
        <SwiperSlide> */}{' '}
      {/* <img src={isMobile? 'banner-mob.png' : 'banner.png'} alt=' className='w-screen' /> */}
      <Image
        src={
          isMobile
            ? '/banners/banner-principal-mob.png'
            : '/banners/banner-principal-desk.png'
        }
        width={1920}
        height={600}
        alt="banner principal"
        quality={80}
        sizes="100vw"
        className="banner-principal"
      />
      {/* </SwiperSlide>
      </Swiper> */}
    </>
  );
}

export default SliderBanner;
