import { OrderSummary } from '@shared/OrderSummary';
import { CheckoutForm } from './CheckoutForm';
import type { StoredProduct } from '@myTypes/types';

export const Checkout = (): HTMLElement => {
  const storedItems: Array<{ product: StoredProduct; quantity: number }> =
    JSON.parse(localStorage.getItem('cart-items') || '[]');

  const checkout = document.createElement('div');
  checkout.innerHTML =
    /*html*/
    `
  <div class="checkout-wrapper px-100 ">
    <div class='d-flex'>
      <div class="col checkout-form me-4"></div>
      <div class="col-5 order-summary"></div>
    </div>
  </div>
  `;

  const checkoutFormWrapper = checkout.querySelector('.checkout-form');
  const orderSummaryWrapper = checkout.querySelector('.order-summary');

  const formElement = CheckoutForm();
  checkoutFormWrapper?.append(formElement);

  orderSummaryWrapper?.append(
    OrderSummary(storedItems, '/checkout', 'Go to Payment')
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
