'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import IconProducts from './icons/products';
import IconStock from './icons/stock';
import IconExchanges from './icons/exchanges';
import IconOff from './icons/off';
import IconFree from './icons/free';

import './style.global.css';

function BenefitsBar() {
  return (
    <>
      <section className="benefits-bar">
        <p className="benefits-p">Por que comprar na Maeztra?</p>
        <ul className="benefits-list">
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
              <li>
                <IconProducts />
                <p>
                  <strong>Produtos importados</strong> <br />
                  Produto de Alta Qualidade
                </p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <IconStock />
                <p>
                  <strong>Estoque no Brazil</strong> <br />
                  Produto mais perto de você!
                </p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <IconExchanges />
                <p>
                  <strong>Trocas Garantidas</strong> <br />
                  Trocas em até 48 hpras, veja as regras
                </p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <IconOff />
                <p>
                  <strong>Ganhe 5% off</strong> <br />
                  Pagando à vista no Cartão
                </p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <IconFree />
                <p>
                  <strong>Frete Grátis</strong> <br />
                  Em compras acima de R$499,00
                </p>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </section>
    </>
  );
}

export default BenefitsBar;
