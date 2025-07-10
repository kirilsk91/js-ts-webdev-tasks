import { Breadcrumbs } from '@shared/Breadcrumbs';
import { Confirmation } from '@components/Confirmation/Confirmation';

export const initConfirmationPage = (dyamicContainer: HTMLElement): void => {
  dyamicContainer.innerHTML = '';
  const cartTitle = document.createElement('h1');
  cartTitle.innerText = 'Order Confirmation';
  cartTitle.className = 'poppins-40 fw-700 px-100';
  dyamicContainer.append(
    Breadcrumbs([
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Order Confirmation',
        href: '',
      },
    ]),
    cartTitle,
    Confirmation()
  );
};
