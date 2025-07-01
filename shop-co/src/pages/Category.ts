import '@styles/categoryPage.css';

import { Breadcrumbs } from '@components/Category/Breadcrumbs';
import type { ProductsResponse } from '@myTypes/types';
import { getProducts } from '@services/Categories';
import { SideMenu } from '@components/Category/SideMenu';
import { Gallery } from '@components/Category/Gallery';

export const initCategoryPage = async (
  dyamicContainer: HTMLElement,
  slug: string
): Promise<void> => {
  const categoryWrapper = document.createElement('div');
  categoryWrapper.className = 'category-wrapper d-flex justify-content-between';
  dyamicContainer.append(Breadcrumbs(slug));

  dyamicContainer.append(categoryWrapper);
  try {
    const products: ProductsResponse = await getProducts(slug);
    console.log(products);
    categoryWrapper.append(SideMenu(), Gallery(products, slug));
  } catch (error) {
    console.error('Some error', error);
    //add placeholder
    dyamicContainer.innerHTML = '<p>Failed to load content.</p>';
  }
};
