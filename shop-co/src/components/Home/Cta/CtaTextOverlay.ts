import { Button } from '../../../shared/Button';
import { CtaStats } from './CtaStats';

export const CtaTextOverlay = (): HTMLElement => {
  const ctaText = document.createElement('section');
  ctaText.className = 'cta-text-overlay';
  ctaText.innerHTML =
    /*html*/
    `
    <h1>
    FIND <span>ANYTHING</span><br/>
    THAT MATCHES<br/>
    YOUR STYLE
    </h1>
    <p>
    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
    </p>
  `;

  ctaText.append(
    //pass scroll action, to go to anchor
    Button('Shop Now', 'default-button', true),
    CtaStats([
      { num: 200, text: 'Happy Customers' },
      { num: 2000, text: 'High-Quality Products' },
      { num: 30000, text: 'International Brands' },
    ])
  );

  return ctaText;
};
