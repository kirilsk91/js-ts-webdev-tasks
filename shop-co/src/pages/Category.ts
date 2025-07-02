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
  //remove filter brands from storage on component rerender
  localStorage.removeItem('selectedFilterBrands');
  const categoryWrapper = document.createElement('div');
  categoryWrapper.className = 'category-wrapper d-flex justify-content-between';
  dyamicContainer.append(Breadcrumbs(slug));

  dyamicContainer.append(categoryWrapper);

  //move sidemenu out of render function to avoid duplicating
  const sideMenu = await SideMenu(
    (selectedOrder) => renderCategoryContent(selectedOrder),
    slug
  );
  categoryWrapper.append(sideMenu);

  const renderCategoryContent = async (order?: SortOrder): Promise<void> => {
    //workaround to clean only the gallery list to avoid duplicating items on conequent requests
    const existingGalleryWrap =
      categoryWrapper.querySelector('.gallery-wrapper');
    if (existingGalleryWrap) existingGalleryWrap.remove();

    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = `<div class="loader"></div>`;
    categoryWrapper.append(loadingIndicator);

    try {
      const productsResponse: ProductsResponse = await getProducts(slug, order);

      const stored = localStorage.getItem('selectedFilterBrands');
      const selectedFilterBrands: string[] = stored ? JSON.parse(stored) : [];
      let filteredProducts = productsResponse.products;

      if (selectedFilterBrands.length) {
        filteredProducts = filteredProducts.filter((p) =>
          selectedFilterBrands.includes(p.brand)
        );
      }
      loadingIndicator.remove();
      categoryWrapper.append(
        Gallery({ ...productsResponse, products: filteredProducts }, slug)
      );
    } catch (error) {
      console.error('Some error', error);
    }
  };

  await renderCategoryContent();
};
