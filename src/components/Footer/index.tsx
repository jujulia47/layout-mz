'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import FooterMob from './components/FooterMob';

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      {isMobile ? <FooterMob /> : <FirstSection />}
      <SecondSection />
    </>
  );
}

export default Footer;
