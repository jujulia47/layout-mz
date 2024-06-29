'use client';

import React, { useState } from 'react';
import MenuMob from './MenuMob';
import IconMenu from './icons/menu';
import IconSearch from './icons/search';
import IconBagMob from './icons/bagMob';

function HeaderMob() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`open ${
          isMenuOpen ? 'block absolute w-11/12 bg-white h-dvh' : 'hidden'
        }`}
      >
        <MenuMob isOpen={isMenuOpen} toggleMenu={handleMenuClick} />
      </div>
      <section className="flex my-9 mx-5 justify-between">
        <div className="flex items-center gap-6" onClick={handleMenuClick}>
          <IconMenu />
          <img src="logo-mz-mob.png" alt="logo" height={12} width={100} />
        </div>
        <div className="flex gap-10">
          <IconSearch />
          <IconBagMob />
        </div>
      </section>
    </>
  );
}

export default HeaderMob;
