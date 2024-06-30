import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import './style.global.css';

function FinalBanner() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="final-banner">
      <article className="text-area">
        <h2>
          <strong className="text-[var(--color-neutral-0)]">Lorem ipsum</strong>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </article>
      <article className="banner">
        <Image
          src={
            isMobile
              ? '/banners/final-banner-mob.png'
              : '/banners/final-banner-desk.png'
          }
          width={isMobile ? 298 : 1114}
          height={isMobile ? 184 : 480}
          alt="banner final"
          quality={100}
          sizes="100vw"
        />
      </article>
    </section>
  );
}

export default FinalBanner;
