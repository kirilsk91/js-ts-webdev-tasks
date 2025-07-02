import type { SortOrder } from '@myTypes/types';
import { Button } from '@shared/Button';

export const SideMenu = (
  onChangeSort: (order: SortOrder) => void
): HTMLElement => {
  const menu = document.createElement('div');
  menu.className = 'side-menu col-3';
  //add boostrap classes later
  menu.innerHTML =
    /*html*/
    `
    <div class='d-flex justify-content-between align-items-center'>
      <h4>Filters</h4>
      <img src='/assets/filter.svg'/>
    </div>
    <div class='menu-sort-items'>
      <h4>Sort by Price</h4>
      <div class='menu-sort-item' data-sort='asc'>Ascending</div>
      <div class='menu-sort-item' data-sort='desc'>Descending</div>
    </div>
`;

  menu.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const sortItem = target.closest('.menu-sort-item') as HTMLElement | null;

    if (sortItem) {
      const sortValue = sortItem.dataset.sort;

      if (sortValue === 'asc' || sortValue === 'desc') {
        // ✅ Only remove the "active" class, not the base class
        const allSortItems = menu.querySelectorAll('.menu-sort-item');
        allSortItems.forEach((item) => item.classList.remove('active'));

        // ✅ Add active class to the clicked item
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

  return menu;
};
