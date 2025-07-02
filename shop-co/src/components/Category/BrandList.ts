import type { Brand } from '@myTypes/types';

export const BrandList = (brands: Brand[]): HTMLElement => {
  const brandList = document.createElement('div');
  brandList.className = 'brand-list';

  const brandListStrings = brands
    .map((b) => b.brand)
    .filter((b): b is string => Boolean(b));

  const uniqueBrandSet = [...new Set(brandListStrings)];

  if (uniqueBrandSet.length === 0) {
    brandList.innerHTML = `<span class='no-brands'>No brands available</span>`;
    return brandList;
  }

  const savedBrandsRaw = localStorage.getItem('selectedFilterBrands');
  const savedBrands: string[] = savedBrandsRaw
    ? JSON.parse(savedBrandsRaw)
    : [];

  uniqueBrandSet.forEach((brand) => {
    const label = document.createElement('label');
    label.className = 'brand-list-item d-flex align-items-center';

    const checkbox = document.createElement('input');
    checkbox.className = 'brand-checkbox form-check-input';
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

    label.append(checkbox, span);
    brandList.appendChild(label);
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
