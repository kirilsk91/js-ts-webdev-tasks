export const Menu = (): HTMLElement => {
  const menu = document.createElement('header');
  menu.className = 'menu-header';
  menu.innerHTML =
    /*html*/
    `
    <h1>SHOP.CO</h1>
    <div>
      <img src="/assets/cart.svg" alt="cart"/>
      <img src="/assets/profile.svg" alt="cart"/>
    </div>
  `;

  return menu;
};
