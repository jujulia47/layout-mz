import React from 'react';
import Image from 'next/image';
import IconUser from './icons/user';
import IconFavorite from './icons/favorite';
import IconBag from './icons/bag';
import IconDress from './icons/dress';
import TopBar from '../TopBar';

import './style.global.css';

function HeaderDesk() {
  return (
    <>
      <TopBar />
      <section className="header-desk">
        <header className="header-container">
          <Image
            src="/logos/logo-mz-desk.png"
            width={147}
            height={18}
            alt="logo maeztra desktop"
            quality={100}
            sizes="100vw"
            className="logo"
          />
          <div className="search">
            <input
              type="search"
              name=""
              id=""
              placeholder="O Que Você Busca?"
            />
            <button>Buscar</button>
          </div>
          <nav className="menu-nav">
            <ul>
              <li>
                <IconUser />
                <p>Minha Conta</p>
              </li>
              <li>
                <IconFavorite />
                <p>Minha Conta</p>
              </li>
              <li className="cart">
                <IconBag />
                <p>Meu Carrinho</p>
              </li>
            </ul>
          </nav>
        </header>
      </section>

      <section className="menu-container">
        <ul>
          <li>
            <IconDress />
            <p className="news">Novidades</p>
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
    </>
  );
}

export default HeaderDesk;
