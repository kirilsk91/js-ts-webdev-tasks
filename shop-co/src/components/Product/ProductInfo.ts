import type { Product } from '@myTypes/types';
import { Price } from '@shared/Price';
import { Rating } from '@shared/Rating';
import { ProductGeneralInfo } from './ProductGeneralInfo';
import { ProductButtonGroup } from './ProductButtonGroup';

export const ProductInfo = (product: Product): HTMLElement => {
  const {
    title,
    rating,
    price,
    discountPercentage,
    description,
    brand,
    availabilityStatus,
    stock,
  } = product;

  const productInfoWrap = document.createElement('div');
  productInfoWrap.className = 'product-info-wrap col-6 ps-4';

  productInfoWrap.innerHTML =
    /*html*/
    `
  <div class='product-info d-flex h-100 justify-content-between flex-column'>
    <div class='poppins-40'>${title}</div>
  </div>
  `;

  const productInfo = productInfoWrap.querySelector('.product-info');
  productInfo?.append(
    Rating(rating),
    Price(price, discountPercentage),
    ProductGeneralInfo(description, brand, stock, availabilityStatus),
    ProductButtonGroup(stock)
  );

  return productInfoWrap;
};
