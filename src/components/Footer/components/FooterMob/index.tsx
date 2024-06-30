'use client';

import React, { useState } from 'react';
import './style.global.css';

const FooterMob = () => {
  const [openSections, setOpenSections] = useState({
    informacoes: false,
    minhaConta: false,
    ondeNosEncontrar: false,
  });

  const toggleSection = (
    section: 'informacoes' | 'minhaConta' | 'ondeNosEncontrar',
  ) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="footer-mob">
      <div className="section-one-mob">
        <p onClick={() => toggleSection('informacoes')}>
          <strong>
            Informações <span>{openSections.informacoes ? '-' : '+'}</span>
          </strong>
        </p>
        {openSections.informacoes && (
          <ul className="infos-list">
            <li>Quem somos</li>
            <li>Prazo de Envio</li>
            <li>Trocas e Devoluções</li>
            <li>Promoções e Cupons</li>
          </ul>
        )}
      </div>
      <div className="section-two-mob">
        <p onClick={() => toggleSection('minhaConta')}>
          <strong>
            Minha Conta <span>{openSections.minhaConta ? '-' : '+'}</span>
          </strong>
        </p>
        {openSections.minhaConta && (
          <ul className="infos-list">
            <li>Minha Conta</li>
            <li>Meus Pedidos</li>
            <li>Cadastre-se</li>
          </ul>
        )}
      </div>
      <div className="section-three-mob">
        <p onClick={() => toggleSection('ondeNosEncontrar')}>
          <strong>
            Onde nos Encontrar{' '}
            <span>{openSections.ondeNosEncontrar ? '-' : '+'}</span>
          </strong>
        </p>
        {openSections.ondeNosEncontrar && (
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
