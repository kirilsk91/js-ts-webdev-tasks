import type { Product } from '@myTypes/types';
import { ProductGalleryItem } from './ProductGalleryItem';

export const ProductGallery = (product: Product): HTMLElement => {
  const { images } = product;
  const productGallery = document.createElement('div');
  productGallery.className = 'product-gallery col-6';

  productGallery.innerHTML =
    /*html*/
    `
    <div class='row flex-grow-1 w-100'>
      <div class='product-gallery-items col-4 thumbnails-wrapper border border-success overflow-auto p-2'>
      </div>
      <div class='product-gallery-pic col-8 d-flex align-items-center justify-content-center border border-warning main-image-wrapper'></div>
    </div>
  `;

  const galleryItemContainer = productGallery.querySelector(
    '.product-gallery-items'
  ) as HTMLElement;

  // galleryItemContainer.addEventListener('click', (event: MouseEvent) => {
  //   const target = event.target as HTMLElement;
  //   if (target && target.tagName === 'IMG') {
  //     const clickedImageSrc = (target as HTMLImageElement).src;
  //     galleryPicContainer.innerHTML = `<img src='${clickedImageSrc}' alt='Selected product image' />`;

  //     galleryItemContainer.querySelectorAll('img').forEach((img) => {
  //       img.classList.remove('active');
  //     });

  //     target.classList.add('active');
  //   }
  // });

  images.forEach((image: string) => {
    galleryItemContainer?.append(ProductGalleryItem(image));
  });

  const galleryPicContainer = productGallery.querySelector(
    '.product-gallery-pic'
  ) as HTMLElement;

  galleryPicContainer.innerHTML = /*html*/ `<img class='img-fluid' src='${images[0]}'/>`;
  productGallery.innerHTML = `<div>aa</div>`;
  return productGallery;
};
