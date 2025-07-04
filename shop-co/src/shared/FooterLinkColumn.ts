import type { FooterLinks } from '@myTypes/types';
import { footerLinkData } from '@utils/data';

export const footerLinkColums = (): DocumentFragment => {
  const fragment = document.createDocumentFragment();

  footerLinkData.forEach(({ colTitle, links }: FooterLinks, index) => {
    const column = document.createElement('div');
    column.className = 'col footer-link-column';

    if (index === footerLinkData.length - 1) {
      column.classList.add('pe-0');
    }

    const topFooterColTitle = document.createElement('h4');
    topFooterColTitle.className = 'rubik-17 fw-500 pb-5 m-0';
    topFooterColTitle.textContent = colTitle;
    column.append(topFooterColTitle);

    links.forEach((item: string) => {
      const link = document.createElement('h5');
      link.className = 'rubik-17 fw-400 text-color-secondary pb-4 m-0';
      link.textContent = item;
      column.append(link);
    });
    fragment.append(column);
  });

  return fragment;
};
