'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MenuMob from './MenuMob';
import IconMenu from './icons/menu';
import IconSearch from './icons/search';
import IconBagMob from './icons/bagMob';

import './style.global.css';

function HeaderMob() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`open ${isMenuOpen ? 'menu-open' : 'hidden'}`}>
        <MenuMob isOpen={isMenuOpen} toggleMenu={handleMenuClick} />
      </div>
      <section className="menu-section">
        <div className="menu-icon" onClick={handleMenuClick}>
          <IconMenu />
          <Image
            src="/logos/logo-mz-mob.png"
            width={100}
            height={12}
            alt="Logo Maeztra mobile"
            quality={80}
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
