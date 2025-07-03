import type { Product } from '@myTypes/types';
import { Price } from '@shared/Price';
import { Rating } from '@shared/Rating';

export const GalleryItem = (item: Product): HTMLElement => {
  const { thumbnail, title, rating, price, discountPercentage, id } = item;

  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item flex-column justify-content-between';
  galleryItem.dataset.productId = id.toString();
  galleryItem.innerHTML =
    /*html*/
    `
  <img class='gallery-item-thumbnail' src="${thumbnail}" alt='image'/>
  <div id='gallery-item-inner-wrap' class='gallery-item-inner-wrap'>
    <div class='gallery-item-title'>${title}</div>
  </div>
  `;

  const galleryItemInnerWrapper = galleryItem.querySelector(
    '.gallery-item-inner-wrap'
  );
  galleryItemInnerWrapper?.append(
    Rating(rating),
    Price(price, discountPercentage)
  );

  return galleryItem;
};
