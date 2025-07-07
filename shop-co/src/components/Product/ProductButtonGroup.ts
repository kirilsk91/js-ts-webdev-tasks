import { Button } from '@shared/Button';

export const ProductButtonGroup = (
  onAddToCart: (quantity: number) => void,
  defaultQuantity = 0
): HTMLElement => {
  let quantity: number = defaultQuantity;

  const btnGroupWrap = document.createElement('div');
  btnGroupWrap.className = 'btn-group-wrap d-flex pt-5 mt-4';
  const quantityBtnGroup = document.createElement('div');

  quantityBtnGroup.className = 'btn-group col-3 me-4';
  quantityBtnGroup.role = 'group';

  const stockDisplay = document.createElement('button');
  stockDisplay.type = 'button';
  stockDisplay.disabled = true;
  stockDisplay.className = 'quantity-btn rubik-17 fw-500';
  stockDisplay.innerText = quantity.toString();

  quantityBtnGroup.append(
    Button({ src: '/assets/minus.svg', alt: 'minus' }, 'quantity-btn qty-decr'),
    stockDisplay,
    Button({ src: '/assets/plus.svg', alt: 'plus' }, 'quantity-btn qty-incr')
  );

  const addToCartButton = Button(
    'Add to Cart',
    'default-button rubik-17 text-color-white w-100'
  );

  btnGroupWrap.append(quantityBtnGroup, addToCartButton);

  quantityBtnGroup.addEventListener('click', (event): void => {
    const button = (event.target as HTMLElement).closest('button');
    if (!button) return;

    if (button.classList.contains('qty-decr')) {
      if (quantity > 0) {
        quantity--;
        stockDisplay.innerText = quantity.toString();
      }
    } else if (button.classList.contains('qty-incr')) {
      quantity++;
      stockDisplay.innerText = quantity.toString();
    }
  });

  addToCartButton?.addEventListener('click', (): void => {
    if (quantity > 0) {
      onAddToCart(quantity);
    }
  });

  return btnGroupWrap;
};
