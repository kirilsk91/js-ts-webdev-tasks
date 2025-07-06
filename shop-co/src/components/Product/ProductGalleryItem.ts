export const ProductGalleryItem = (itemSrc: string): HTMLElement => {
  const productItem = document.createElement('img');
  productItem.src = itemSrc;
  productItem.alt = 'image';
  productItem.className = 'product-gallery-item img-fluid mb-2';

  return productItem;
};
