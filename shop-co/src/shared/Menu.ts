import { updateCartUI } from '@utils/updateCartUI';

export const Menu = (): HTMLElement => {
  const menu = document.createElement('header');
  menu.className = 'menu-header col-12 d-flex';
  menu.innerHTML =
    /*html*/
    `
    <div>
      <a href='/'>
        <span class='poppins-32 fw-800'>SHOP.CO</span>
      </a>
    </div>
    <div class="position-relative">
      <img id='cartIcon' src="/assets/cart.svg" alt="cart"/>
      <img src="/assets/profile.svg" alt="profile"/>
      <span id="cart-badge" class="position-absolute start-50 rubik-14 fw-500 translate-middle badge rounded-pill text-danger" style="display:none;">
        0
        <span class="visually-hidden">items in cart</span>
      </span>
    </div>
  `;
  //append menu to DOM before geting cart items
  document.body.append(menu);

  updateCartUI(menu);

  window.addEventListener('storage', (event): void => {
    if (event.key === 'cart-items') {
      updateCartUI(menu);
    }
  });

  menu.addEventListener('click', (): void => {
    const cartIcon = menu.querySelector('#cartIcon');
    if (cartIcon) {
      window.location.hash = '/cart';
    }
  });

  return menu;
};
