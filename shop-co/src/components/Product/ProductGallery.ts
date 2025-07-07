import type { Product } from '@myTypes/types';
import { ProductGalleryItem } from './ProductGalleryItem';

export const ProductGallery = (product: Product): HTMLElement => {
  const { images } = product;
  const productGallery = document.createElement('div');
  productGallery.className = 'product-gallery col-6 d-flex pe-4';

  productGallery.innerHTML =
    /*html*/
    `
    <div class='d-flex gap-3'>
      <div class='product-gallery-items col-3 px-0'>
      </div>
      <div class='product-gallery-pic col-9'></div>
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

  galleryPicContainer.innerHTML = `<img class='img-fluid' src='${images[0]}'/>`;

  return productGallery;
};
