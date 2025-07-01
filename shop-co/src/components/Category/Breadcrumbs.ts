export const Breadcrumbs = (category: string = 'N/A'): HTMLElement => {
  const bcRow = document.createElement('div');
  bcRow.className = 'breadcrumb-row';
  bcRow.innerHTML =
    /*html*/
    `
    <span class='bc-root'><a href='/'>Home</a></span>
    <img src='/assets/bc.svg' alt='arrow'/>
    <span class='bc-category'>${category}</span>
  `;

  return bcRow;
};
