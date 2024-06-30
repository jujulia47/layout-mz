import React from 'react';
import '../../style.global.css';

function FirstSection() {
  return (
    <section className="footer-st">
      <article className="section-one">
        <h6 className="section-title">
          <strong>Informações</strong>
        </h6>
        <p>Quem somos</p>
        <p>Prazo de Envio</p>
        <p>Trocas e Devoluções</p>
        <p>Promoções e Cupons</p>
      </article>
      <article className="section-two">
        <h6>
          <strong>Minha Conta</strong>
        </h6>
        <p>Minha Conta</p>
        <p>Meus Pedidos</p>
        <p>Cadastre-se</p>
      </article>
      <article className="section-three">
        <h6>
          <strong>Onde nos Encontrar</strong>
        </h6>
        <p>Lojas</p>
        <p>Endereço</p>
      </article>
    </section>
  );
}

export default FirstSection;
