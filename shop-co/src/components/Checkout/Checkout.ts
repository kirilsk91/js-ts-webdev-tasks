import { OrderSummary } from '@shared/OrderSummary';
import type { StoredProduct } from '@myTypes/types';

import { CheckoutForm } from './CheckoutForm';

export const Checkout = (): HTMLElement => {
  const storedItems: Array<{ product: StoredProduct; quantity: number }> =
    JSON.parse(localStorage.getItem('cart-items') || '[]');

  const checkout = document.createElement('div');
  checkout.className = 'checkout-wrapper px-100';
  checkout.innerHTML =
    /*html*/
    `
    <div class='d-flex flex-column flex-lg-row'>
      <div class="col-12 col-lg checkout-form me-lg-4 mb-4 mb-lg-0"></div>
      <div class="col-12 col-lg-5 order-summary"></div>
    </div>
  `;

  const checkoutFormWrapper = checkout.querySelector('.checkout-form');
  const orderSummaryWrapper = checkout.querySelector('.order-summary');

  const formElement = CheckoutForm();
  checkoutFormWrapper?.append(formElement);

  orderSummaryWrapper?.append(
    OrderSummary(storedItems, '/confirmation', 'Go to Payment')
  );

  const checkoutButton = orderSummaryWrapper?.querySelector('button');
  const form = formElement as HTMLFormElement;

  const validateForm = () => {
    if (form.checkValidity()) {
      checkoutButton?.classList.remove('disabled');
    } else {
      checkoutButton?.classList.add('disabled');
    }
  };

  form.addEventListener('input', validateForm);
  form.addEventListener('change', validateForm);

  validateForm();
  return checkout;
};
