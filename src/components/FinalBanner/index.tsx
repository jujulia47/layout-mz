import React from 'react';
import Image from 'next/image';

import './style.global.css';

function FinalBanner() {
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
          src="/banners/banner02-desk.png"
          width={1114}
          height={480}
          alt="banner principal"
          quality={80}
          sizes="100vw"
        />
        {/* <img src="banner-02.png" alt="" className="max-md:hidden" />
        <img src="banner02-mob.png" alt="" className="hidden max-md:block" /> */}
      </article>
    </section>
  );
}

export default FinalBanner;
