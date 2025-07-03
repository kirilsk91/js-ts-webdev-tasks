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
    <div>
      <img src="/assets/cart.svg" alt="cart"/>
      <img src="/assets/profile.svg" alt="cart"/>
    </div>
  `;

  return menu;
};
