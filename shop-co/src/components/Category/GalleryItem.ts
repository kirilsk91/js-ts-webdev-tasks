import type { Product } from '@myTypes/types';
import { Price } from '@shared/Price';
import { Rating } from '@shared/Rating';
import { truncateText } from '@utils/truncateText';

export const GalleryItem = (item: Product): HTMLElement => {
  const { thumbnail, title, rating, price, discountPercentage, id } = item;

  const col = document.createElement('div');
  col.className = 'col-6 col-sm-3';

  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';
  galleryItem.dataset.productId = id.toString();
  galleryItem.innerHTML =
    /*html*/
    `
  <img class='gallery-item-thumbnail' src="${thumbnail}" alt='image'/>
  <div class='gallery-item-inner-wrap'>
    <div class='rubik-20 pt-3'>${truncateText(title, 30)}</div>
  </div>
  `;

  const galleryItemInnerWrapper = galleryItem.querySelector(
    '.gallery-item-inner-wrap'
  );
  galleryItemInnerWrapper?.append(
    Rating(rating),
    Price(price, discountPercentage)
  );

  col.append(galleryItem);
  return col;
};
