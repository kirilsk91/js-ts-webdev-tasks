import type { Category } from '../../types';
import { CategoryListItem } from './CategoryListItem';

export const CategoryList = (items: Category[]): DocumentFragment => {
  const fragment = document.createDocumentFragment();
  const sectionTitle = document.createElement('div');
  sectionTitle.className = 'category-title';
  sectionTitle.innerHTML =
    /*html*/
    `
  <h1>Categories</h1>
  `;

  const catList = document.createElement('section');
  catList.className = 'cat-list';
  catList.id = 'categories';

  items.forEach(({ name }) => {
    catList.appendChild(CategoryListItem(name));
  });

  fragment.append(sectionTitle, catList);
  return fragment;
};
