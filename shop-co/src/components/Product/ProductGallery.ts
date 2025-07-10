import type { Product } from '@myTypes/types';
import { ProductGalleryItem } from './ProductGalleryItem';

export const ProductGallery = (product: Product): HTMLElement => {
  const { images } = product;
  const productGallery = document.createElement('div');
  productGallery.className =
    'product-gallery d-flex flex-wrap flex-sm-nowrap col-12 col-sm-6 pe-sm-4 mb-4 mb-sm-0';

  productGallery.innerHTML =
    /*html*/
    `
    <div class='d-flex flex-column flex-sm-row gap-3'>
      <div class='product-gallery-items d-flex flex-row flex-sm-column w-100 order-2 order-sm-1 gap-3'>
      </div>
      <div class='product-gallery-pic col-12 col-sm-9 order-1 order-sm-2'></div>
    </div>
  `;

  const galleryItemContainer = productGallery.querySelector(
    '.product-gallery-items'
  ) as HTMLElement;

  galleryItemContainer.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target && target.tagName === 'IMG') {
      const clickedImageSrc = (target as HTMLImageElement).src;
      galleryPicContainer.innerHTML =
        /*html*/
        `
      <img class='img-fluid' src="${clickedImageSrc}" alt='Selected product image' />
      `;

      galleryItemContainer.querySelectorAll('img').forEach((img) => {
        img.classList.remove('active');
      });

      target.classList.add('active');
    }
  });

  images.forEach((image: string) => {
    galleryItemContainer?.append(ProductGalleryItem(image));
  });

  const galleryPicContainer = productGallery.querySelector(
    '.product-gallery-pic'
  ) as HTMLElement;

  galleryPicContainer.innerHTML =
    /*html*/
    `
  <img class='img-fluid' src="${images[0]}"/>
  `;

  return productGallery;
};
