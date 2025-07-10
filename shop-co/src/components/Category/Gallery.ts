import type { Product, ProductsResponse } from '@myTypes/types';
import { GalleryItem } from './GalleryItem';

export const Gallery = (
  { products }: ProductsResponse,
  slug: string
): HTMLElement => {
  const galleryWrapper = document.createElement('div');
  galleryWrapper.className = 'gallery-wrapper col ms-sm-5';

  const galleryTitle = document.createElement('div');
  galleryTitle.className =
    'd-flex justify-content-between align-items-center gallery-title rubik-32 mb-4';

  const titleText = document.createElement('span');
  titleText.className = 'gallery-title-text';
  titleText.innerText = slug;

  const filterIconWrap = document.createElement('div');
  filterIconWrap.className =
    'd-flex align-items-center filter-icon-wrap d-sm-none';
  filterIconWrap.innerHTML =
    /*html*/
    `
  <img src='/assets/filter.svg' alt='filter icon'/>
  `;

  galleryTitle.append(titleText, filterIconWrap);

  const filterIcon = filterIconWrap.querySelector('img');
  filterIcon?.addEventListener('click', (): void => {
    const sideMenu = document.querySelector('.side-menu') as HTMLElement;
    if (sideMenu) {
      sideMenu.classList.toggle('d-none');
    }
  });

  if (products.length === 0) {
    const noItems = document.createElement('div');
    noItems.className = `d-flex flex-column justify-content-center align-items-center h-100`;
    noItems.innerHTML =
      /*html*/
      `
    <img src='/assets/not-found.svg' alt='no items'/>
    <h3 class='rubik-32 mt-5'>Nothing was found.</h3>`;
    galleryWrapper.append(galleryTitle, noItems);
    return galleryWrapper;
  }

  const galleryList = document.createElement('div');
  galleryList.className = 'gallery-list row g-4';

  products.forEach((product: Product) => {
    galleryList.append(GalleryItem(product));
  });

  galleryList.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    //in case user clicks on some label (heading)
    const galleryItem = target.closest('.gallery-item') as HTMLElement | null;

    if (galleryItem && galleryItem.dataset.productId) {
      const pId = galleryItem.dataset.productId;
      window.location.href = `/product/${pId}`;
    }
  });

  galleryWrapper.append(galleryTitle, galleryList);

  return galleryWrapper;
};
