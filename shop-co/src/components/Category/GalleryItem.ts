import type { Product } from '@myTypes/types';
import { Price } from '@shared/Price';
import { Rating } from '@shared/Rating';

export const GalleryItem = (item: Product): HTMLElement => {
  const { thumbnail, title, rating, price, discountPercentage } = item;

  const galleryItem = document.createElement('div');

  galleryItem.className = 'gallery-item';
  galleryItem.innerHTML =
    /*html*/
    `
      <img class='gallery-item-thumbnail' src="${thumbnail}" alt='image'/>
      <div class='gallery-item-title'>${title}</div>
  `;

  galleryItem.append(Rating(rating), Price(price, discountPercentage));

  return galleryItem;
};
