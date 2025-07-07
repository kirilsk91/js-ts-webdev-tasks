import '@styles/cartPage.css';
import { Cart } from '@components/Cart/Cart';
import { Breadcrumbs } from '@shared/Breadcrumbs';

export const initCartPage = (dyamicContainer: HTMLElement): void => {
  dyamicContainer.innerHTML = '';
  const cartTitle = document.createElement('h1');
  cartTitle.innerText = 'Your cart';
  cartTitle.className = 'poppins-40 fw-700 px-100';
  dyamicContainer.append(
    Breadcrumbs([
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Cart',
        href: '',
      },
    ]),
    cartTitle,
    Cart()
  );
};
