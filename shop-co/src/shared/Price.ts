export const Price = (price: number, discount: number): HTMLElement => {
  const priceContainer = document.createElement('div');
  priceContainer.className = 'price-container';
  const actualPrice = document.createElement('span');
  actualPrice.className = 'gallery-item-price old';
  actualPrice.innerHTML = `$${price.toString()}`;
  const discountedPrice = document.createElement('span');
  discountedPrice.className = 'gallery-item-price';
  discountedPrice.innerHTML = `$${(price * (1 - discount / 100))
    .toFixed(2)
    .toString()}`;
  const discountNum = document.createElement('span');
  discountNum.className = 'discount';
  discountNum.innerHTML = `-${Math.ceil(discount).toString()}%`;

  priceContainer.append(discountedPrice, actualPrice, discountNum);

  return priceContainer;
};
