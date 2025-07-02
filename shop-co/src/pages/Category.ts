import '@styles/categoryPage.css';

import { Breadcrumbs } from '@components/Category/Breadcrumbs';
import type { ProductsResponse, SortOrder } from '@myTypes/types';
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

  //move sidemenu out of render function to avoid duplicating
  const sideMenu = SideMenu((selectedOrder) =>
    renderCategoryContent(selectedOrder)
  );
  categoryWrapper.append(sideMenu);

  const renderCategoryContent = async (order?: SortOrder): Promise<void> => {
    //workaround to clean only the gallery list to avoid duplicating items on conequent requests
    const existingGalleryWrap =
      categoryWrapper.querySelector('.gallery-wrapper');
    if (existingGalleryWrap) existingGalleryWrap.remove();

    try {
      const products: ProductsResponse = await getProducts(slug, order);
      categoryWrapper.append(Gallery(products, slug));
    } catch (error) {
      console.error('Some error', error);
    }
  };

  await renderCategoryContent();
};
