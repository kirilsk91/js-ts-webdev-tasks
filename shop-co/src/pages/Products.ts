import '@styles/productPage.css';

import { Breadcrumbs } from '@components/Category/Breadcrumbs';
import type { Product } from '@myTypes/types';
import { getProduct } from '@services/Product';

export const initProductPage = async (
  dyamicContainer: HTMLElement,
  productId: string
): Promise<void> => {
  const productWrapper = document.createElement('div');
  productWrapper.className = 'product-wrapper d-flex justify-content-between';
  productWrapper.innerHTML = `<h1>Product page</h1>`;
  dyamicContainer.append(productWrapper);

  try {
    const productResponse: Product = await getProduct(productId);
    dyamicContainer.prepend(
      Breadcrumbs(productResponse.category, productResponse.title)
    );
    console.log(productResponse);
  } catch (error) {}
};
