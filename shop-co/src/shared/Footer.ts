import { FooterFloatSub } from './FooterFloatSub';
import { footerLinkColums } from './FooterLinkColumn';

export const Footer = (): HTMLElement => {
  const footerWrapper = document.createElement('div');
  footerWrapper.className = 'footer-wrapper';

  const footer = document.createElement('footer');
  footer.className = 'footer';

  const footerTop = document.createElement('div');
  footerTop.className = 'footer-top';

  const footerBrandColumn = document.createElement('div');
  footerBrandColumn.className = 'footer-brand-column';
  footerBrandColumn.innerHTML =
    /*html*/
    `
  <h1>SHOP.CO</h1>
  <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
  `;

  const footerLinks = document.createElement('div');
  footerLinks.className = 'footer-links';

  footerLinks.innerHTML =
    /*html*/
    `
  <a href="/"><img src='/assets/twitter-logo.svg'/></a>
  <a href="/" class='footer-fb-logo'><img src='/assets/fb-logo.svg'/></a>
  <a href="/"><img src='/assets/insta-logo.svg'/></a>
  <a href="/"><img src='/assets/github-logo.svg'/></a>

  `;

  const footerBase = document.createElement('div');
  footerBase.className = 'footer-base';
  footerBase.innerHTML =
    /*html*/
    `
    <div class='footer-base-inner-wrapper'>
      <p>Shop.co © 2000-2023, All Rights Reserved</p>
      <div>
        <img src='/assets/visa.svg' alt='visa'/>
        <img src='/assets/mastercard.svg' alt='mastercard'/>
        <img src='/assets/paypal.svg' alt='paypal'/>
        <img src='/assets/aPay.svg' alt='apple pay'/>
        <img src='/assets/gPay.svg' alt='google pay'/>
      </div>
    </div>
  `;

  footerBrandColumn.append(footerLinks);
  footerTop.append(footerBrandColumn);
  footer.append(footerTop);
  footer.append(footerLinkColums());
  footerWrapper.append(footer);
  footerWrapper.append(footerBase);
  footerWrapper.prepend(FooterFloatSub());
  return footerWrapper;
};
