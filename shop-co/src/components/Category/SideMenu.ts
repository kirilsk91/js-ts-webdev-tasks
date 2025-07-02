import type { SortOrder } from '@myTypes/types';
import { Button } from '@shared/Button';
import { BrandList } from './BrandList';
import { getProductBrands } from '@services/Categories';
import { PriceFilterSlider } from './PriceFilterSlider';

export const SideMenu = async (
  onChangeSort: (order: SortOrder | undefined) => void,
  slug: string
): Promise<HTMLElement> => {
  const menu = document.createElement('div');
  menu.className = 'side-menu';
  //add boostrap classes later
  menu.innerHTML =
    /*html*/
    `
    <div class='d-flex justify-content-between align-items-center'>
      <h4>Filters</h4>
      <img src='/assets/filter.svg' role="button" data-bs-toggle="collapse" data-bs-target="#filtersCollapse" aria-expanded="false" aria-controls="filtersCollapse"/>
    </div>

    <div id="filtersCollapse" class="collapse mb-3">
      <div class="accordion-body pt-3">
        <h5>Brands</h5>
      </div>
    </div>
    <div class='menu-sort-items'>
      <h4>Sort by Price</h4>
      <div class='menu-sort-item' data-sort='asc'>Ascending</div>
      <div class='menu-sort-item' data-sort='desc'>Descending</div>
    </div>
`;

  const accordionBody = menu.querySelector('.accordion-body');
  if (accordionBody) {
    try {
      const productBrands = await getProductBrands(slug);
      const { products } = productBrands;
      accordionBody.append(BrandList(products), PriceFilterSlider());
    } catch (error) {
      throw error;
    }
  }

  menu.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const sortItem = target.closest('.menu-sort-item') as HTMLElement | null;

    if (sortItem) {
      const sortValue = sortItem.dataset.sort;

      if (sortValue === 'asc' || sortValue === 'desc') {
        const allSortItems = menu.querySelectorAll('.menu-sort-item');
        allSortItems.forEach((item) => item.classList.remove('active'));
        sortItem.classList.add('active');

        //need to use unknown here to narrow down types smh??
        const sortOrder = sortValue as unknown as SortOrder;
        onChangeSort(sortOrder);
      }
    }
  });

  menu.append(
    Button('Apply Filter', 'menu-sort-button-apply'),
    Button('Reset Filter', 'menu-sort-button-reset')
  );

  const applyFilterButton = menu.querySelector(
    '.menu-sort-button-apply'
  ) as HTMLButtonElement;
  applyFilterButton.addEventListener('click', () => {
    const selectedFilterBrands = Array.from(
      menu.querySelectorAll<HTMLInputElement>(
        'input[name="brand-filter"]:checked'
      )
    ).map((cb) => cb.value);

    localStorage.setItem(
      'selectedFilterBrands',
      JSON.stringify(selectedFilterBrands)
    );
    onChangeSort(undefined);
  });

  const resetFilterButton = menu.querySelector(
    '.menu-sort-button-reset'
  ) as HTMLButtonElement;
  resetFilterButton.addEventListener('click', () => {
    localStorage.removeItem('selectedFilterBrands');
    menu
      .querySelectorAll<HTMLInputElement>('input[name="brand-filter"]:checked')
      .forEach((cb) => (cb.checked = false));
    menu
      .querySelectorAll('.menu-sort-item')
      .forEach((item) => item.classList.remove('active'));
    onChangeSort(undefined);
  });

  return menu;
};
