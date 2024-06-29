'use client';

import React from 'react';
import IconDress from '@/components/HeaderDesk/icons/dress';
import IconFavorite from '@/components/HeaderDesk/icons/favorite';
import IconUser from '@/components/HeaderDesk/icons/user';

function MenuMob({ isOpen, toggleMenu }: any) {
  return (
    <div className={`menu-mob ${isOpen ? 'open' : ''}`}>
      <nav className="flex items-center justify-between border-b border-solid border-[var(--color-neutral-1)] p-5 -mt-8">
        <ul className="flex gap-8">
          <li>
            <IconUser />
          </li>
          <li>
            <IconFavorite />
          </li>
        </ul>
        <div>
          <p className="close-menu" onClick={toggleMenu}>
            <strong className="text-xl text-black font-bold">X</strong>
          </p>
        </div>
      </nav>
      <section>
        <ul className="flex flex-col gap-5 p-5">
          <li className="flex items-center gap-3">
            <IconDress />
            <p className="text-[var(--button)]">Novidades</p>
          </li>
          <li>
            <p>Vestidos</p>
          </li>
          <li>
            <p>Roupas</p>
          </li>
          <li>
            <p>Sapatos</p>
          </li>
          <li>
            <p>Lingerie</p>
          </li>
          <li>
            <p>Acessórios</p>
          </li>
          <li>
            <p>OUTLET</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MenuMob;
