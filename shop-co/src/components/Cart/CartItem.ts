import type { StoredProduct } from '@myTypes/types';
import { Price } from '@shared/Price';

export const CartItem = ({
  product,
  quantity,
}: {
  product: StoredProduct;
  quantity: number;
}): HTMLElement => {
  const { title, price, discountPercentage, thumbnail, id } = product;
  const cartItem = document.createElement('div');
  cartItem.className = 'd-flex cart-item py-3';
  cartItem.innerHTML =
    /*html*/
    `
    <img src="${thumbnail}"/>
    <div class='d-flex flex-column justify-content-between align-items-center; cart-item-info py-2 w-100'>
      <div class='d-flex justify-content-between'>
        <h3 class='rubik-20 m-0'>${title}</h3>
        <div class='d-flex align-items-center'>
          <h4 class='rubik-17 text-color-secondary m-0'>Quantity:</h4>
          <span class='rubik-17 ms-2'>${quantity}</span>
          <img data-id='${id} 'class='ms-4 trash-cart' src='/assets/trash.svg' />
        </div>
        </div>
      <div class='price-wrap'>
      </div>
    </div>
  `;

  const priceWrap = cartItem.querySelector('.price-wrap');
  const priceComponent = Price(price, discountPercentage, false);
  priceComponent.classList.remove('pb-3');
  priceWrap?.append(priceComponent);

  return cartItem;
};
