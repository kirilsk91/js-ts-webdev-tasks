import { Button } from '@shared/Button';

import { CtaStats } from './CtaStats';

export const CtaTextOverlay = (): HTMLElement => {
  const ctaText = document.createElement('section');
  ctaText.className = 'cta-text-overlay col-5';
  ctaText.innerHTML =
    /*html*/
    `
    <span class='poppins-64 fw-800'>FIND <span 
    style='text-decoration: underline;text-decoration-thickness: 3px'>ANYTHING
    </span><br/>
    THAT MATCHES<br/>
    YOUR STYLE
    </span>
    <p class='py-4 m-0 rubik-17 text-color-secondary' style='line-height: 24px'>
    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
    </p>
  `;

  ctaText.append(
    //pass scroll action, to go to anchor
    Button('Shop Now', 'default-button rubik-17 text-color-white', true),
    CtaStats([
      { num: 200, text: 'International Brands' },
      { num: 2000, text: 'High-Quality Products' },
      { num: 30000, text: 'Happy Customers' },
    ])
  );

  return ctaText;
};
