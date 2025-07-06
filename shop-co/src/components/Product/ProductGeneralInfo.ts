export const ProductGeneralInfo = (
  descr: string,
  brand: string,
  stock: number,
  availabilityStatus: string
): HTMLElement => {
  const description = document.createElement('span');
  description.className = 'product-info-description';

  description.innerHTML =
    /*html*/
    `
    <span class='rubik-17 text-color-secondary'>
      ${descr}
    </span>
    <div class='product-brand-wrap py-4 my-4'>
      <h4 class='rubik-17 text-color-secondary'>Brand</h4>
      <div class='poppins-24'>${brand}</div>
    </div>
    <div class='product-stock-wrap'>
      <h4 class='rubik-17 text-color-secondary'>${availabilityStatus}</h4>
      <div class='poppins-24'>${stock} items</div>
    </div>
  `;

  return description;
};
