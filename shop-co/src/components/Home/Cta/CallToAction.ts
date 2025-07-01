import { CtaTextOverlay } from './CtaTextOverlay';

export const CallToAction = (): HTMLElement => {
  const cta = document.createElement('div');
  cta.className = 'cta-wrapper';
  cta.innerHTML =
    /*html*/
    `
  <img class='cta-bg' src='/assets/cta-bg.svg' alt='cta-bg'/>
  <img class='cta-star1' src='/assets/star.svg' alt='cta star'/>
  <img class='cta-star2' src='/assets/star.svg' alt='cta star'/>
  `;
  cta.append(CtaTextOverlay());

  return cta;
};
