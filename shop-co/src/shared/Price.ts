export const Price = (
  price: number,
  discount: number,
  showPrice: boolean = true
): HTMLElement => {
  const priceContainer = document.createElement('div');
  priceContainer.className =
    'price-container d-flex flex-wrap align-items-center gap-2 pb-3';
  priceContainer.id = 'priceCont';
  const actualPrice = document.createElement('span');
  actualPrice.className = 'rubik-24 text-color-light-grey crossed-word';
  actualPrice.innerHTML = `$${price.toFixed(2)}`;

  const discountedPrice = document.createElement('span');
  discountedPrice.className = 'rubik-24 text-color-primary';
  discountedPrice.innerHTML = `$${(price * (1 - discount / 100)).toFixed(2)}`;

  const discountNum = document.createElement('span');
  discountNum.className =
    'rubik-14 rounded-pill text-danger bg-danger bg-opacity-10 fw-500 px-3 py-2';
  discountNum.innerHTML = `-${Math.ceil(discount).toString()}%`;

  priceContainer.append(discountedPrice);

  if (showPrice) {
    priceContainer.append(actualPrice);
  }

  priceContainer.append(discountNum);

  return priceContainer;
};
