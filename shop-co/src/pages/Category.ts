import '@styles/categoryPage.css';

import { Breadcrumbs } from '@shared/Breadcrumbs';
import type { ProductsResponse, SortOrder } from '@myTypes/types';
import { getProducts } from '@services/Categories';
import { SideMenu } from '@components/Category/SideMenu';
import { Gallery } from '@components/Category/Gallery';
import { NotFound } from '@shared/NotFound';

export const initCategoryPage = async (
  dyamicContainer: HTMLElement,
  slug: string
): Promise<void> => {
  //remove filter brands from storage on component rerender
  localStorage.removeItem('selectedFilterBrands');
  localStorage.removeItem('selectedFilterRatings');
  localStorage.removeItem('selectedPriceRange');

  const categoryWrapper = document.createElement('div');
  categoryWrapper.className = 'category-wrapper px-100 d-flex flex-wrap';
  dyamicContainer.append(Breadcrumbs(slug), categoryWrapper);

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

      const storedBrands = localStorage.getItem('selectedFilterBrands');
      const selectedFilterBrands: string[] = storedBrands
        ? JSON.parse(storedBrands)
        : [];
      const storedRatings = localStorage.getItem('selectedFilterRatings');
      const selectedFilterRatings: string[] = storedRatings
        ? JSON.parse(storedRatings)
        : [];

      const storedPriceRange = localStorage.getItem('selectedPriceRange');

      let products = productsResponse.products;

      if (selectedFilterBrands.length) {
        products = products.filter((p) => {
          return selectedFilterBrands.includes(p.brand);
        });
      }

      if (selectedFilterRatings.length) {
        const numericRatings = selectedFilterRatings.map(Number);
        products = products.filter((p) =>
          numericRatings.some((minRating) => p.rating >= minRating)
        );
      }

      if (storedPriceRange) {
        const parsed = JSON.parse(storedPriceRange) as [number, number];
        if (parsed && parsed.length === 2) {
          const [minPrice, maxPrice] = parsed;
          products = products.filter(
            (p) => p.price >= minPrice && p.price <= maxPrice
          );
        }
      }

      loadingIndicator.remove();
      categoryWrapper.append(Gallery({ ...productsResponse, products }, slug));
    } catch (error) {
      console.error('Some error', error);
      //temp fix to catch 404s
      categoryWrapper.append(NotFound());
    }
  };

  await renderCategoryContent();
};
