import type { FooterLinks } from '@myTypes/types';
import { footerLinkData } from '@utils/data';

export const footerLinkColums = (): HTMLElement => {
  const fragment = document.createDocumentFragment();

  footerLinkData.forEach(({ colTitle, links }: FooterLinks) => {
    const column = document.createElement('div');
    column.className = 'footer-column';

    const footerColTitle = document.createElement('h4');
    footerColTitle.textContent = colTitle;
    column.append(footerColTitle);

    links.forEach((item: string) => {
      const link = document.createElement('h5');
      link.textContent = item;
      column.append(link);
    });
    fragment.append(column);
  });

  const container = document.createElement('span');
  container.className = 'footer-bot';
  container.append(fragment);

  return container;
};
