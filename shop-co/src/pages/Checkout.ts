import '@styles/checkoutPage.css';
import { Checkout } from '@components/Checkout/Checkout';
import { Breadcrumbs } from '@shared/Breadcrumbs';

export const initCheckOutPage = (dyamicContainer: HTMLElement): void => {
  dyamicContainer.innerHTML = '';
  const checkoutTitle = document.createElement('h1');
  checkoutTitle.innerText = 'Checkout';
  checkoutTitle.className = 'poppins-40 fw-700 px-100';

  dyamicContainer.append(
    Breadcrumbs([
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Checkout',
        href: '',
      },
    ]),
    checkoutTitle,
    Checkout()
  );
};
