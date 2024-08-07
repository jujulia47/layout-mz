import React from 'react';
import Image from 'next/image';

import '../../style.global.css';

function ProductOne() {
  return (
    <section className="product-section">
      <Image
        src="/shelf/308x381.png"
        width={308}
        height={381}
        alt="imagem do primeiro produto"
        quality={100}
        sizes="100vw"
        className="product-img"
      />
      <div className="product-card">
        <div className="product-sku">
          <ul>
            <li
              className="sku-selected"
              style={{ backgroundColor: '#DEAC71' }}
            ></li>
            <li style={{ backgroundColor: '#D37164' }}></li>
            <li style={{ backgroundColor: '#6497D3' }}></li>
            <li style={{ backgroundColor: '#3C3B79' }}></li>
          </ul>
        </div>
        <p className="product-value">
          <strong>R$ 500,00</strong>
        </p>
        <p className="product-name">Faux Suede Mini Skirt</p>
        <p className="product-desc">
          A faux suede mini skirt featuring exposed button-front closures and
          panel seam construction.
        </p>
        <button className="buy-button">Adicionar</button>
      </div>
    </section>
  );
}

export default ProductOne;
