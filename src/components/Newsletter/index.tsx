import React, { useState } from 'react';

import './style.global.css';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      alert('Cadastrado na nossa newsletter com sucesso!');
    }
  };

  return (
    <section className="newsletter">
      <h1 className="newsletter-title">
        <strong>Recebe Nossa Newsletter</strong>
      </h1>
      <div className="newsletter-form">
        <form onSubmit={handleSubmit} className="news-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
          <button type="submit">
            <strong>Enviar</strong>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
