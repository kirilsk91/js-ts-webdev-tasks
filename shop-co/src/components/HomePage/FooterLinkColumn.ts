import type { FooterLinks } from '../../types';
import { footerLinkData } from '../../utils/data';

export const footerLinkColums = (): HTMLElement => {
  const fragment = document.createDocumentFragment();

  footerLinkData.forEach(({ colTitle, links }: FooterLinks) => {
    const column = document.createElement('div');
    column.className = 'footer-column';

    const footerColTitle = document.createElement('h4');
    footerColTitle.textContent = colTitle;
    column.appendChild(footerColTitle);

    links.forEach((item: string) => {
      const link = document.createElement('h5');
      link.textContent = item;
      column.appendChild(link);
    });
    fragment.appendChild(column);
  });

  const container = document.createElement('span');
  container.className = 'footer-bot';
  container.appendChild(fragment);

  return container;
};
