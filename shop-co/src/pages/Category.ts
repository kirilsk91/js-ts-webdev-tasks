import '@styles/categoryPage.css';

import { Breadcrumbs } from '@components/Category/Breadcrumbs';
import type { Product } from '@myTypes/types';
import { getProduct } from '@services/Categories';

export const initCategoryPage = async (
  dyamicContainer: HTMLElement,
  slug: string
): Promise<void> => {
  dyamicContainer.append(Breadcrumbs(slug));

  try {
    const products: Product[] = await getProduct('a');
    console.log(products);
  } catch (error) {
    console.error('Some error', error);
    //add placeholder
    dyamicContainer.innerHTML = '<p>Failed to load content.</p>';
  }
};
