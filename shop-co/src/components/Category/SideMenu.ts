import { Button } from '@shared/Button';

export const SideMenu = (): HTMLElement => {
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
      <div class='menu-sort-item'>Ascending</div>
      <div class='menu-sort-item'>Descending</div>
    </div>
`;

  menu.append(
    Button('Apply Filter', 'menu-sort-button-apply'),
    Button('Reset Filter', 'menu-sort-button-reset')
  );

  return menu;
};
