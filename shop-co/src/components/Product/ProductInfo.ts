import type { Product } from '@myTypes/types';
import { Price } from '@shared/Price';
import { Rating } from '@shared/Rating';
import { ProductGeneralInfo } from './ProductGeneralInfo';

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
  productInfoWrap.className = 'product-info-wrap col-6';

  productInfoWrap.innerHTML =
    /*html*/
    `
  <div class='product-info'>
    <div class='poppins-40'>${title}</div>
  </div>
  `;

  const productInfo = productInfoWrap.querySelector('.product-info');
  productInfo?.append(
    Rating(rating),
    Price(price, discountPercentage),
    ProductGeneralInfo(description, brand, stock, availabilityStatus)
  );

  return productInfoWrap;
};
