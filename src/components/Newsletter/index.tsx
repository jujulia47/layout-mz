import React from 'react';
import './style.global.css';

function Newsletter() {
  return (
    <section className="newsletter">
      <h1 className="newsletter-title">
        <strong>Recebe Nossa Newsletter</strong>
      </h1>
      <div className="newsletter-form">
        <input type="text" name="" id="" placeholder="Digite seu e-mail" />
        <button type="submit">
          <strong>Enviar</strong>
        </button>
      </div>
    </section>
  );
}

export default Newsletter;
