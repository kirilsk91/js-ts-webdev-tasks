export const Breadcrumbs = (
  category: string = 'N/A',
  productName?: string
): HTMLElement => {
  const bcRow = document.createElement('div');
  bcRow.className = 'breadcrumb-row';
  bcRow.innerHTML =
    /*html*/
    `
    <span class='bc-root'><a href='/'>Home</a></span>
    <img src='/assets/bc.svg' alt='arrow'/>
    <span class='bc-category'><a href='/category/${category}'>${category}</a></span>
  `;

  if (productName) {
    const bcArrow = document.createElement('img');
    bcArrow.src = '/assets/bc.svg';
    bcArrow.alt = 'arrow';

    const bcProductName = document.createElement('span');
    bcProductName.className = 'bc-product-name';
    bcProductName.innerText = `${productName}`;

    bcRow.append(bcArrow, bcProductName);
  } else {
    const categoryElement = bcRow.querySelector('.bc-category');
    categoryElement?.classList.add('active');
  }

  return bcRow;
};
