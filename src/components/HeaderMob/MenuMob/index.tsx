'use client';

import React from 'react';
import IconDress from '@/components/HeaderDesk/icons/dress';
import IconFavorite from '@/components/HeaderDesk/icons/favorite';
import IconUser from '@/components/HeaderDesk/icons/user';

import '../style.global.css';

function MenuMob({ isOpen, toggleMenu }: any) {
  return (
    <div className={`menu-mob ${isOpen ? 'open' : ''}`}>
      <nav className="nav-mob">
        <ul>
          <li>
            <IconUser />
          </li>
          <li>
            <IconFavorite />
          </li>
        </ul>
        <div>
          <p className="close-menu" onClick={toggleMenu}>
            <strong>X</strong>
          </p>
        </div>
      </nav>
      <section className="menu-mob--section">
        <ul>
          <li className="news-mob">
            <IconDress />
            <p className="news-mob">Novidades</p>
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
