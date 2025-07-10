import '@styles/productPage.css';
import '../style.css';

import { Breadcrumbs } from '@shared/Breadcrumbs';
import type { Product } from '@myTypes/types';
import { getProduct } from '@services/Product';
import { ProductGallery } from '@components/Product/ProductGallery';
import { ProductInfo } from '@components/Product/ProductInfo';
import { NotFound } from '@shared/NotFound';

export const initProductPage = async (
  dyamicContainer: HTMLElement,
  productId: string
): Promise<void> => {
  const productWrapper = document.createElement('div');
  productWrapper.className =
    'product-wrapper d-flex flex-wrap flex-sm-nowrap px-100';

  try {
    const productResponse: Product = await getProduct(productId);
    productWrapper.append(
      ProductGallery(productResponse),
      ProductInfo(productResponse)
    );
    dyamicContainer.append(
      Breadcrumbs([
        {
          label: 'Home',
          href: '/',
        },
        {
          label: productResponse.category,
          href: `/category/${productResponse.category}`,
        },
        {
          label: productResponse.title,
          href: '',
        },
      ])
    );
    dyamicContainer.append(productWrapper);
  } catch (error) {
    console.error('Some error', error);
    dyamicContainer.append(NotFound('An error occured while loading product.'));
  }
};
