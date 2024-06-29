// import Modal from '@/components/Modal';
import TopBar from '@/components/TopBar';
import HeaderDesk from '@/components/HeaderDesk';
// import HeaderMob from '@/components/HeaderMob';
import SliderBanner from '@/components/SliderBanner';
import BenefitsBar from '@/components/BenefitsBar';
import Brands from '@/components/Brands';
import Shelf from '@/components/Shelf';
import FinalBanner from '@/components/FinalBanner';
import Newsletter from '@/components/Newsletter';
// import Footer from '@/components/Footer';

import './style.global.css';

export default function Home() {
  return (
    <main>
      <TopBar />
      <HeaderDesk />
      <SliderBanner />
      <section className="body-content">
        <BenefitsBar />
        <Brands />
        <Shelf />
        <FinalBanner />
        <Newsletter />
      </section>
    </main>
  );
}
