export const Promo = (): HTMLElement => {
  const promoBanner = document.createElement('div');
  promoBanner.className = 'promo-banner';
  promoBanner.innerHTML =
    /*html*/
    `
    <div>Sign up and get 20% off your first oder. <span class='promo-banner-cta'>Sign Up Now</span>
    <i class="close-promo-cta bi bi-x-lg"></i></div>
  `;

  const closeIcon = promoBanner.querySelector('.close-promo-cta');
  if (closeIcon) {
    closeIcon.addEventListener('click', () => {
      promoBanner.style.display = 'none';
    });
  }

  return promoBanner;
};
