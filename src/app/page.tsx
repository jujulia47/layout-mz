'use client';
import { useMediaQuery } from 'react-responsive';
import Modal from '@/components/Modal';
import HeaderDesk from '@/components/HeaderDesk';
import HeaderMob from '@/components/HeaderMob';
import SliderBanner from '@/components/SliderBanner';
import BenefitsBar from '@/components/BenefitsBar';
import Brands from '@/components/Brands';
import Shelf from '@/components/Shelf';
import FinalBanner from '@/components/FinalBanner';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <main>
      <Modal />
      {isMobile ? <HeaderMob /> : <HeaderDesk />}
      <SliderBanner />
      <section className="body-content">
        <BenefitsBar />
        <Brands />
        <Shelf />
        <FinalBanner />
      </section>
      <Newsletter />
      <Footer />
    </main>
  );
}
