import { FooterFloatSub } from './FooterFloatSub';
import { footerLinkColums } from './FooterLinkColumn';

export const Footer = (): HTMLElement => {
  const footerWrapper = document.createElement('div');
  footerWrapper.className = 'footer-wrapper';

  const footer = document.createElement('footer');
  footer.className = 'footer px-100';

  const footerTop = document.createElement('div');
  footerTop.className = 'footer-top container';

  footerTop.innerHTML =
    /*html*/
    `
  <div class='row justify-content-between'>
    <div class='col footer-brand-column ps-0'>
      <span class="poppins-32 fw-800">SHOP.CO</span>
      <p class='rubik-14 m-0 pt-4 pb-5 text-color-secondary' style='line-height: 1.3rem;'>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
      <div class='footer-links d-flex gap-2'>
        <a href="/"><img src='/assets/twitter-logo.svg'/></a>
        <a href="/" class='footer-fb-logo'><img src='/assets/fb-logo.svg'/></a>
        <a href="/"><img src='/assets/insta-logo.svg'/></a>
        <a href="/"><img src='/assets/github-logo.svg'/></a>
      </div>
    </div>
  </div>
  `;

  const footerTopRow = footerTop.querySelector('.row');
  footerTopRow?.append(footerLinkColums());

  const footerBot = document.createElement('div');
  footerBot.className = 'footer-bot pt-5';

  const currentYear = new Date().getFullYear();

  footerBot.innerHTML =
    /*html*/
    `
    <div class='footer-bot-wrap align-items-center pt-4 pb-5 d-flex justify-content-between'>
      <div class='col-4'style="width: fit-content;">
        <p class='rubik-14 m-0'>Shop.co © ${currentYear}, All Rights Reserved</p>
      </div>
      <div class='col-4' style="width: fit-content;">
        <img src='/assets/visa.svg' alt='visa'/>
        <img src='/assets/mastercard.svg' alt='mastercard'/>
        <img src='/assets/paypal.svg' alt='paypal'/>
        <img src='/assets/aPay.svg' alt='apple pay'/>
        <img src='/assets/gPay.svg' alt='google pay'/>
      </div>
    </div>
  `;
  footer.append(footerTop, footerBot);
  footerWrapper.append(footer);
  footerWrapper.prepend(FooterFloatSub());
  return footerWrapper;
};
