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

  const checkoutForm = checkout.querySelector('.checkout-form');
  checkoutForm?.append(CheckoutForm());

  const cartOrderSummary = checkout.querySelector('.order-summary');
  cartOrderSummary?.append(
    OrderSummary(storedItems, '/checkout', 'Go to Payment')
  );
  return checkout;
};
