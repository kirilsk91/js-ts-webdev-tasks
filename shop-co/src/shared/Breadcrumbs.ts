export const Breadcrumbs = (
  category: string = 'N/A',
  productName?: string
): HTMLElement => {
  const bcRow = document.createElement('div');
  bcRow.className = 'breadcrumb-row py-4 mx-100 d-flex align-items-center';
  bcRow.innerHTML =
    /*html*/
    `
    <span class='rubik-17 me-3'><a class='text-decoration-none text-color-secondary' href='/'>Home</a></span>
    <img class='me-3' src='/assets/bc.svg' alt='arrow'/>
    <span class='rubik-17 bc-category me-3'>
      <a class='text-decoration-none text-color-secondary' href='/category/${category}'>${category}</a>
    </span>
  `;

  if (productName) {
    const bcArrow = document.createElement('img');
    bcArrow.className = 'me-3';
    bcArrow.src = '/assets/bc.svg';
    bcArrow.alt = 'arrow';

    const bcProductName = document.createElement('span');
    bcProductName.className = 'rubik-17 active bc-item';
    bcProductName.innerHTML =
      /*html*/
      `
    <a class='text-decoration-none text-color-secondary' href='/'>${productName}</a>
    `;
    const categoryElement = bcRow.querySelector('.bc-item');
    categoryElement?.classList.add('active');
    bcRow.append(bcArrow, bcProductName);
  } else {
    const categoryElement = bcRow.querySelector('.bc-category');
    categoryElement?.classList.add('active');
  }

  return bcRow;
};
