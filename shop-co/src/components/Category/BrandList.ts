import type { Brand } from '@myTypes/types';

export const BrandList = (brands: Brand[]): HTMLElement => {
  const brandList = document.createElement('div');
  brandList.className = 'brand-list';

  const title = document.createElement('h5');
  title.className = 'rubik-17 mb-2';
  title.innerText = 'Brands';
  brandList.append(title);

  const brandListStrings = brands
    .map((b) => b.brand)
    //in case products have no brands
    .filter((b): b is string => Boolean(b));

  const uniqueBrandSet = [...new Set(brandListStrings)];

  if (uniqueBrandSet.length === 0) {
    brandList.innerHTML = `<span class='no-brands rubik-17 fw-300'>No brands available</span>`;
    brandList.style.cursor = 'text';
    return brandList;
  }

  const savedBrandsLocal = localStorage.getItem('selectedFilterBrands');
  const savedBrands: string[] = savedBrandsLocal
    ? JSON.parse(savedBrandsLocal)
    : [];

  uniqueBrandSet.forEach((brand) => {
    const label = document.createElement('label');
    label.className =
      'brand-list-item d-flex align-items-center rubik-17 fw-400 text-color-secondary';
    label.style.marginBottom = '0.1rem';
    label.style.width = 'fit-content';
    const checkbox = document.createElement('input');
    checkbox.className = 'form-check-input';
    checkbox.type = 'checkbox';
    checkbox.value = brand || '';
    checkbox.name = 'brand-filter';

    if (savedBrands.includes(brand)) {
      checkbox.checked = true;
    }

    const span = document.createElement('span');
    span.className = 'brand-title';
    span.textContent = brand || '';
    span.style.marginLeft = '0.5rem';
    span.style.cursor = 'pointer';

    label.append(checkbox, span);
    brandList.append(label);
  });

  brandList.addEventListener('change', () => {
    //array.from for working with NodeList
    const selectedFilterBrands = Array.from(
      brandList.querySelectorAll<HTMLInputElement>(
        'input[name="brand-filter"]:checked'
      )
    ).map((el) => el.value);
    localStorage.setItem(
      'selectedFilterBrands',
      JSON.stringify(selectedFilterBrands)
    );
  });

  return brandList;
};
