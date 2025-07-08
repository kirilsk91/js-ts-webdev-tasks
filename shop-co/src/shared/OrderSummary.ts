import type { StoredProduct } from '@myTypes/types';
import { Button } from '@shared/Button';

export const OrderSummary = (
  storedItems: {
    product: StoredProduct;
    quantity: number;
  }[]
): HTMLElement => {
  let totalSum = 0;
  let totalDiscount = 0;
  let discountedSum = 0;

  const summary = document.createElement('div');

  storedItems.forEach(({ product, quantity }) => {
    const { price, discountPercentage } = product;

    const itemTotal = price * quantity;
    const itemDiscount =
      Math.ceil((price * discountPercentage) / 100) * quantity;
    const itemFinal = itemTotal - itemDiscount;

    totalSum += itemTotal;
    totalDiscount += itemDiscount;
    discountedSum += itemFinal;
  });
  const totalDiscountPercentage = (totalDiscount / totalSum) * 100;
  summary.className =
    'order-summary d-flex h-100 flex-column justify-content-between';
  summary.innerHTML =
    /*html*/
    `
  <h3 class='rubik-24 text-color-primary m-0'>Order Summary</h3>
  <div class='d-flex justify-content-between'>
    <h4 class='rubik-20 fw-400 text-color-secondary m-0'>Subtotal</h4>
    <span class='rubik-20 fw-700'>$${totalSum.toFixed(0)}</span>
  </div>
  <div class='d-flex justify-content-between'>
    <h4 class='rubik-20 fw-400 text-color-secondary m-0'>Discount <span class='discount-ppc'>(-${totalDiscountPercentage.toFixed(
      0
    )}%)</span></h4>
    <span class='rubik-20 fw-700 text-danger'>-$${totalDiscount}</span>
  </div>
  <div class='d-flex summary-total justify-content-between pt-3'>
    <h4 class='rubik-20 fw-400 m-0'>Total</h4>
    <span class='rubik-20 fw-700'>$${discountedSum.toFixed(0)}</span>
  </div>
  `;

  const checkoutButton = Button(
    'Proceed to Checkout',
    'default-button text-color-white w-100 rubik-17 fw-500 d-flex align-items-center justify-content-center'
  );

  const btnImg = document.createElement('img');
  btnImg.src = '/assets/arrow.svg';
  btnImg.className = 'ms-3';

  checkoutButton.append(btnImg);
  if (storedItems.length === 0) {
    const discountPpc = summary.querySelector('.discount-ppc');
    discountPpc?.classList.add('d-none');
    checkoutButton.classList.add('disabled');
    checkoutButton.setAttribute('disabled', 'true');
  }
  summary.append(checkoutButton);
  return summary;
};
