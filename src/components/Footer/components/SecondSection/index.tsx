import React from 'react';
import Image from 'next/image';

import '../../style.global.css';

function SecondSection() {
  return (
    <section className="footer-nd">
      <article className="footer-content">
        <div className="footer-social">
          <Image
            src="/footer/social/facebook.png"
            width={32}
            height={32}
            alt="banner principal"
            quality={80}
            sizes="100vw"
          />
          <Image
            src="/footer/social/linkedin.png"
            width={32}
            height={32}
            alt="banner principal"
            quality={80}
            sizes="100vw"
          />
          <Image
            src="/footer/social/instagram.png"
            width={32}
            height={32}
            alt="banner principal"
            quality={80}
            sizes="100vw"
          />
          <Image
            src="/footer/social/youtube.png"
            width={32}
            height={32}
            alt="banner principal"
            quality={80}
            sizes="100vw"
          />
        </div>
        <div className="footer-payment">
          <Image
            src="/footer/metodos-pagamento/mastercard.png"
            width={32}
            height={32}
            alt="banner principal"
            quality={80}
            sizes="100vw"
          />
          <Image
            src="/footer/metodos-pagamento/visa.png"
            width={32}
            height={32}
            alt="banner principal"
            quality={80}
            sizes="100vw"
          />
          <Image
            src="/footer/metodos-pagamento/mastercard.png"
            width={32}
            height={32}
            alt="banner principal"
            quality={80}
            sizes="100vw"
          />
          <Image
            src="/footer/metodos-pagamento/visa.png"
            width={32}
            height={32}
            alt="banner principal"
            quality={80}
            sizes="100vw"
          />
        </div>
        <div className="footer-logos">
          <div>
            <p>Powered by</p>
            <Image
              src="/footer/logos/vtex-footer-desk.png"
              width={64}
              height={24}
              alt="logo vtex"
              quality={80}
              sizes="100vw"
            />
          </div>
          <div>
            <p>Developed by</p>
            <Image
              src="/footer/logos/mz-footer-desk.png"
              width={64}
              height={24}
              alt="logo vtex"
              quality={80}
              sizes="100vw"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default SecondSection;
