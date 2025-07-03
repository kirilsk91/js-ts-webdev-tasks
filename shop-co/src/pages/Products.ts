import '@styles/productPage.css';
import '../style.css';

import { Breadcrumbs } from '@components/Category/Breadcrumbs';
import type { Product } from '@myTypes/types';
import { getProduct } from '@services/Product';
import { ProductGallery } from '@components/Product/ProductGallery';
import { ProductInfo } from '@components/Product/ProductInfo';

export const initProductPage = async (
  dyamicContainer: HTMLElement,
  productId: string
): Promise<void> => {
  const productWrapper = document.createElement('div');
  productWrapper.className = 'product-wrapper d-flex justify-content-between';

  try {
    const productResponse: Product = await getProduct(productId);
    productWrapper.append(
      ProductGallery(productResponse),
      ProductInfo(productResponse)
    );
    dyamicContainer.append(
      Breadcrumbs(productResponse.category, productResponse.title)
    );
    dyamicContainer.append(productWrapper);
    console.log(productResponse);
  } catch (error) {}
};
