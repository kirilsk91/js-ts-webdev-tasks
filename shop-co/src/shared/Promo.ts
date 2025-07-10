import './shared.css';

export const Promo = (): HTMLElement => {
  const promoBanner = document.createElement('div');
  promoBanner.className =
    'promo-banner col-12 d-flex justify-content-center justify-content-md-end';
  promoBanner.innerHTML =
    /*html*/
    `
    <div class='col-xl-4 col-sm-12 text-center rubik-14 text-color-white'>
      Sign up and get 20% off your first oder. <span class='promo-banner-cta rubik-14 fw-600 text-color-white'>Sign Up Now</span>
    </div>
    <div class='close-promo-cta-wrap col-4 d-flex justify-content-end'><img class='close-promo-cta' src='/assets/times.svg' alt='times'/></div>
  `;

  const closeIcon = promoBanner.querySelector('.close-promo-cta');
  if (closeIcon) {
    closeIcon.addEventListener('click', (): void => {
      promoBanner.className = 'd-none';
    });
  }

  return promoBanner;
};
