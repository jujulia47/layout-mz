import React from 'react';
import Image from 'next/image';

import '../../style.global.css';

function ProductTwo() {
  return (
    <section className="product-section">
      <Image
        src="/shelf/308x381-1.png"
        width={308}
        height={381}
        alt="imagem do segundo produto"
        quality={80}
        sizes="100vw"
        className="product-img"
      />
      <div className="product-card">
        <div className="product-sku">
          <ul>
            <li className=" sku-selectedbg-[#1C1A19]"></li>
            <li className="bg-[#D84E4B]"></li>
            <li className="bg-[#CFC9B0]"></li>
            <li className="bg-[#EAE9E5]"></li>
          </ul>
        </div>
        <p className="product-value">
          <strong>R$ 320,00</strong>
        </p>
        <p className="product-name">Ruched Rose Print Mini Skirt</p>
        <p className="product-desc">
          A satin mini skirt featuring an allover floral print, ruched side with
          self-tie closure, concealed back zipper, and a flounce hem.
        </p>
        <button className="buy-button">Adicionar</button>
      </div>
    </section>
  );
}

export default ProductTwo;
