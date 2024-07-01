'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import IconEmail from './icons/email';
import IconSend from './icons/send';

import './style.global.css';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      alert('E-mail enviado com sucesso!');
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-active">
          <section className="modal">
            <p className="close" onClick={handleClose}>
              {' '}
              FECHAR{' '}
            </p>
            <article className="container">
              <Image
                src="/image-modal.png"
                width={426}
                height={532}
                alt="imagem modal"
                quality={80}
                sizes="100vw"
                className="img-modal"
              />
              <div className="text-area">
                <div className="email">
                  <IconEmail />
                </div>
                <p className="title"> BEM VINDO À MAEZTRA </p>
                <p className="paragraph">
                  Receba em Primeira mão <br />
                  <strong> desconto e ofertas exclusivas</strong>
                </p>
                <form onSubmit={handleSubmit} className="form-modal">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                    required
                  />
                  <button type="submit">
                    Enviar <IconSend />
                  </button>
                </form>
              </div>
            </article>
          </section>
        </div>
      )}
    </>
  );
}

export default Modal;
