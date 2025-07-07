import { Button } from '@shared/Button';

export const ProductButtonGroup = (stock: number): HTMLElement => {
  const btnGroupWrap = document.createElement('div');
  btnGroupWrap.className = 'btn-group-wrap d-flex pt-5 mt-4';
  const quantityBtnGroup = document.createElement('div');

  quantityBtnGroup.className = 'btn-group col-3 me-4';
  quantityBtnGroup.role = 'group';

  const stockDisplay = document.createElement('button');
  stockDisplay.type = 'button';
  stockDisplay.disabled = true;
  stockDisplay.className = 'quantity-btn rubik-17 fw-500';
  stockDisplay.innerText = stock.toString();

  quantityBtnGroup.append(
    Button({ src: '/assets/minus.svg', alt: 'minus' }, 'quantity-btn '),
    stockDisplay,
    Button({ src: '/assets/plus.svg', alt: 'plus' }, 'quantity-btn')
  );

  btnGroupWrap.append(
    quantityBtnGroup,
    Button('Add to Cart', 'default-button rubik-17 text-color-white w-100')
  );

  return btnGroupWrap;
};
