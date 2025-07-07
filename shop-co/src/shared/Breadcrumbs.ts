import type { BreadcrumbItem } from '@myTypes/types';

export const Breadcrumbs = (items: BreadcrumbItem[]): HTMLElement => {
  const bcRow = document.createElement('div');
  bcRow.className = 'breadcrumb-row py-4 mx-100 d-flex align-items-center';

  items.forEach((item, index) => {
    const isLastItem = index === items.length - 1;

    if (index > 0) {
      const arrow = document.createElement('img');
      arrow.src = '/assets/bc.svg';
      arrow.alt = 'arrow';
      arrow.className = 'me-3';
      bcRow.append(arrow);
    }

    const span = document.createElement('span');
    span.className = `rubik-17 me-3 ${
      isLastItem ? 'active bc-item' : 'bc-item'
    }`;

    if (item.href && !isLastItem) {
      span.innerHTML =
        /*html*/
        `
      <a class='text-decoration-none text-color-secondary' href='${item.href}'>
        ${item.label}
      </a>
      `;
    } else {
      span.textContent = item.label;
    }

    bcRow.append(span);
  });

  return bcRow;
};
