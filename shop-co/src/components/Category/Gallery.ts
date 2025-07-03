import type { Product, ProductsResponse } from '@myTypes/types';
import { GalleryItem } from './GalleryItem';

export const Gallery = (
  { products }: ProductsResponse,
  slug: string
): HTMLElement => {
  const galleryWrapper = document.createElement('div');
  galleryWrapper.className = 'gallery-wrapper col';

  const gallery = document.createElement('div');
  gallery.className = 'gallery';

  const galleryTitle = document.createElement('div');
  galleryTitle.className = 'gallery-title';
  galleryTitle.innerText = slug;

  if (products.length === 0) {
    const noItems = document.createElement('div');
    noItems.className = `no-gallery-items`;
    noItems.innerHTML =
      /*html*/
      `
    <img src='/assets/not-found.svg' alt='no items'/>
    <h3>Nothing was found.</h3>`;
    galleryWrapper.append(galleryTitle, noItems);
    return galleryWrapper;
  }

  const galleryList = document.createElement('div');
  galleryList.className = 'gallery-list';

  products.forEach((product: Product) => {
    galleryList.append(GalleryItem(product));
  });

  gallery.append(galleryTitle, galleryList);

  galleryWrapper.append(gallery);

  return galleryWrapper;
};
