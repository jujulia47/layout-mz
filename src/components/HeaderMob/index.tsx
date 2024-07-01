'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MenuMob from './MenuMob';
import IconMenu from './icons/menu';
import IconSearch from './icons/search';
import IconBagMob from './icons/bagMob';
import TopBar from '../TopBar';

import './style.global.css';

function HeaderMob() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`menu-open ${isMenuOpen ? 'open' : 'hidden'}`}>
        <MenuMob isOpen={isMenuOpen} toggleMenu={handleMenuClick} />
      </div>
      <TopBar />
      <section className="menu-section">
        <div className="menu-icon" onClick={handleMenuClick}>
          <IconMenu />
          <Image
            src="/logos/logo-mz-mob.png"
            width={100}
            height={12}
            alt="Logo Maeztra mobile"
            quality={100}
            sizes="100vw"
          />
        </div>
        <div className="search-icon">
          <IconSearch />
          <IconBagMob />
        </div>
      </section>
    </>
  );
}

export default HeaderMob;
