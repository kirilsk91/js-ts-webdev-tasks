import type { SortOrder } from '@myTypes/types';
import { Button } from '@shared/Button';
import { BrandList } from './BrandList';
import { getProductBrands } from '@services/Categories';
import { PriceFilterSlider } from './PriceFilterSlider';
import { RatingFilter } from './RatingFilter';
import type { API } from 'nouislider';

//some copy pasted stuff from stack to deal with types
type SliderHTMLElement = HTMLElement & { noUiSlider: API };

export const SideMenu = async (
  onChangeSort: (order: SortOrder | undefined) => void,
  slug: string
): Promise<HTMLElement> => {
  const menu = document.createElement('div');
  menu.className = 'side-menu col-3 d-flex flex-column w-auto h-100';

  menu.innerHTML =
    /*html*/
    `
    <div class='d-flex justify-content-between align-items-center'>
      <span class='rubik-20'>Filters</span>
      <img src='/assets/filter.svg' role="button" data-bs-toggle="collapse" data-bs-target="#filtersCollapse" aria-expanded="false" aria-controls="filtersCollapse"/>
    </div>
    <div id="filtersCollapse" class="collapse">
      <div class="accordion-body pt-3"></div>
    </div>
    <div class='menu-sort-items'>
      <span class='rubik-20'>Sort by Price</span>
      <div class='menu-sort-item rubik-17 text-color-secondary mt-3' data-sort='asc'>Ascending</div>
      <div class='menu-sort-item rubik-17 text-color-secondary mt-3' data-sort='desc'>Descending</div>
    </div>
`;

  const accordionBody = menu.querySelector('.accordion-body');
  if (accordionBody) {
    try {
      const productBrands = await getProductBrands(slug);
      const { products } = productBrands;
      accordionBody.append(
        BrandList(products),
        PriceFilterSlider(),
        RatingFilter()
      );
    } catch (error) {
      throw error;
    }
  }

  // sort by price logic
  menu.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const sortItem = target.closest('.menu-sort-item') as HTMLElement | null;

    if (sortItem) {
      const sortValue = sortItem.dataset.sort;

      if (sortValue === 'asc' || sortValue === 'desc') {
        const allSortItems = menu.querySelectorAll('.menu-sort-item');
        allSortItems.forEach((item) => item.classList.remove('fw-600'));
        sortItem.classList.add('fw-600');

        //need to use unknown here to narrow down types smh??
        const sortOrder = sortValue as unknown as SortOrder;
        onChangeSort(sortOrder);
      }
    }
  });

  menu.append(
    Button('Apply Filter', 'menu-sort-button-apply rubik-14 fw-500'),
    Button('Reset Filter', 'menu-sort-button-reset rubik-14 fw-500')
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
    localStorage.removeItem('selectedFilterRatings');
    localStorage.removeItem('selectedPriceRange');
    menu
      .querySelectorAll<HTMLInputElement>('input[name="brand-filter"]:checked')
      .forEach((cb) => (cb.checked = false));
    menu
      .querySelectorAll<HTMLInputElement>('input[name="rating-filter"]:checked')
      .forEach((cb) => (cb.checked = false));

    // reset slider values
    const sliderWrapper = menu.querySelector('.filter-slider-wrapper');
    const slider = sliderWrapper?.querySelector<HTMLElement>(
      '.slider'
    ) as SliderHTMLElement;
    if (slider && slider.noUiSlider) {
      slider.noUiSlider.set([0, 2000]);
    }
    const minInput =
      sliderWrapper?.querySelector<HTMLInputElement>('.min-price-input');
    const maxInput =
      sliderWrapper?.querySelector<HTMLInputElement>('.max-price-input');

    if (minInput) minInput.value = '0';
    if (maxInput) maxInput.value = '2000';

    menu
      .querySelectorAll('.menu-sort-item')
      .forEach((item) => item.classList.remove('active'));
    onChangeSort(undefined);
  });

  return menu;
};
