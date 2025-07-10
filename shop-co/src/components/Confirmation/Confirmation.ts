import { updateCartUI } from '@utils/updateCartUI';

export const Confirmation = (): HTMLElement => {
  const confirmationWrap = document.createElement('div');
  confirmationWrap.className =
    'confirm-wrap text-center px-100 d-flex flex-column justify-content-center align-items-center';

  confirmationWrap.innerHTML =
    /*html*/
    `
    <img src='/assets/celebration.svg'></img>
    <h3 class='rubik-32 mt-5'>
      Success! Your order has been confirmed.
    </h3>
    <h4 class='rubik-20 text-color-secondary'>
      Please check out your email address to track delivery progress.
    </h4>
    <p class='rubik-17 text-color-secondary mt-4'>
      Redirecting to homepage
      <span class='redirect-timer text-color-primary'>
      in 5s.
      </span>
    </p>
  `;

  localStorage.removeItem('cart-items');

  updateCartUI();

  const countDownEl = confirmationWrap.querySelector(
    '.redirect-timer'
  ) as HTMLElement;

  let countDown = 5;

  const interval = setInterval((): void => {
    countDown--;
    if (countDown > 0) {
      countDownEl.textContent = `in ${countDown}s.`;
    } else {
      clearInterval(interval);
      countDownEl.textContent = 'now.';
      window.location.hash = '/';
    }
  }, 1000);

  return confirmationWrap;
};
