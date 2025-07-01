import { CategoryListItem } from './CategoryListItem';

export const CategoryList = (items: string[]): DocumentFragment => {
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

  items.forEach((item) => {
    catList.appendChild(CategoryListItem(item));
  });

  fragment.append(sectionTitle, catList);
  return fragment;
};
