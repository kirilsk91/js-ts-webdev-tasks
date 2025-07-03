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
    <span class='product-brand-descr'>
      ${descr}
    </span>
    <div class='product-brand-wrap'>
      <h4>Brand</h4>
      <div class='product-brand'>${brand}</div>
    </div>
    <div class='product-stock-wrap'>
      <h4>${availabilityStatus}</h4>
      <div class='product-stock-num'>${stock} items</div>
    </div>
  `;

  return description;
};
