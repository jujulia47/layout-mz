'use client';

import React, { useState } from 'react';
import './style.global.css';

const FooterMob = () => {
  const [openSections, setOpenSections] = useState({
    infos: false,
    account: false,
    findUs: false,
  });

  const toggleSection = (section: 'infos' | 'account' | 'findUs') => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="footer-mob">
      <div className="section-one-mob">
        <p onClick={() => toggleSection('infos')}>
          <strong>
            Informações <span>{openSections.infos ? '-' : '+'}</span>
          </strong>
        </p>
        {openSections.infos && (
          <ul className="infos-list">
            <li>Quem somos</li>
            <li>Prazo de Envio</li>
            <li>Trocas e Devoluções</li>
            <li>Promoções e Cupons</li>
          </ul>
        )}
      </div>
      <div className="section-two-mob">
        <p onClick={() => toggleSection('account')}>
          <strong>
            Minha Conta <span>{openSections.account ? '-' : '+'}</span>
          </strong>
        </p>
        {openSections.account && (
          <ul className="infos-list">
            <li>Minha Conta</li>
            <li>Meus Pedidos</li>
            <li>Cadastre-se</li>
          </ul>
        )}
      </div>
      <div className="section-three-mob">
        <p onClick={() => toggleSection('findUs')}>
          <strong>
            Onde nos Encontrar <span>{openSections.findUs ? '-' : '+'}</span>
          </strong>
        </p>
        {openSections.findUs && (
          <ul className="infos-list-final">
            <li>Lojas</li>
            <li>Endereço</li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default FooterMob;
