import type { StoredProduct } from '@myTypes/types';
import { OrderSummary } from '@shared/OrderSummary';
import { updateCartUI } from '@utils/updateCartUI';
import { fire } from '@utils/sweetalert';

import { CartItem } from './CartItem';
import { EmptyCart } from './EmptyCart';

export const Cart = (): HTMLElement => {
  const cart = document.createElement('div');
  cart.className = 'cart-wrapper px-100';
  cart.innerHTML =
    /*html*/
    `
    <div class='d-flex flex-column flex-lg-row'>
      <div class="col-12 col-lg cart-items me-lg-4 mb-4 mb-lg-0"></div>
      <div class="col-12 col-lg-5 order-summary"></div>
    </div>
  `;

  const storedItems: Array<{ product: StoredProduct; quantity: number }> =
    JSON.parse(localStorage.getItem('cart-items') || '[]');

  const cartItemList = cart.querySelector('.cart-items') as HTMLElement;

  storedItems.forEach((item): void => {
    cartItemList?.append(CartItem(item));
  });

  cartItemList?.addEventListener('click', (event): void => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('trash-cart')) {
      const productId = target.dataset.id;
      if (!productId) return;

      //get actual cart from storage
      const currentlyStoredItems: Array<{
        product: StoredProduct;
        quantity: number;
      }> = JSON.parse(localStorage.getItem('cart-items') || '[]');

      const idToTrash = parseInt(productId);
      const updatedCartItems = currentlyStoredItems.filter(
        (item) => item.product.id !== idToTrash
      );

      localStorage.setItem('cart-items', JSON.stringify(updatedCartItems));
      const cartItemEl = target.closest('.cart-item');
      cartItemEl?.remove();

      fire({
        title: 'Product has been deleted!',
        text: 'You can now see it is definetly NOT in your cart.',
        icon: 'info',
      });

      updateCartUI();

      //rerender summary
      const summaryContainer = cart.querySelector('.order-summary');
      summaryContainer!.innerHTML = '';
      summaryContainer!.append(
        OrderSummary(
          updatedCartItems,
          '/checkout',
          'Proceed to Confirmation (Ex-Checkout)'
        )
      );

      if (updatedCartItems.length === 0 && cartItemList) {
        EmptyCart(cartItemList);
      }
    }
  });

  if (storedItems.length === 0 && cartItemList) {
    EmptyCart(cartItemList);
  }

  const cartOrderSummary = cart.querySelector('.order-summary');
  cartOrderSummary?.append(
    OrderSummary(
      storedItems,
      '/checkout',
      'Proceed to Confirmation (Ex-Checkout)'
    )
  );
  return cart;
};
