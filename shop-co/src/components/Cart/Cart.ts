import type { StoredProduct } from '@myTypes/types';
import { CartItem } from './CartItem';
import { OrderSummary } from '@shared/OrderSummary';
import { updateCartUI } from '@utils/updateCartUI';
import { fire } from '@utils/sweetalert';
import { EmptyCart } from './EmptyCart';

export const Cart = (): HTMLElement => {
  const cart = document.createElement('div');
  cart.innerHTML =
    /*html*/
    `
  <div class="cart-wrapper px-100 ">
    <div class='d-flex'>
      <div class="col cart-items me-4"></div>
      <div class="col-5 order-summary"></div>
    </div>
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

      const idToTrash = parseInt(productId);
      const updatedCartItems = storedItems.filter(
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

      const summaryContainer = cart.querySelector('.order-summary');
      summaryContainer!.innerHTML = '';
      summaryContainer!.append(
        OrderSummary(updatedCartItems, '/checkout', 'Proceed to Checkout')
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
    OrderSummary(storedItems, '/checkout', 'Proceed to Checkout')
  );
  return cart;
};
