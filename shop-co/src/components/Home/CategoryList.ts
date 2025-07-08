import type { Category } from '@myTypes/types';
import { CategoryListItem } from './CategoryListItem';

export const CategoryList = (items: Category[]): DocumentFragment => {
  const fragment = document.createDocumentFragment();

  const sectionTitle = document.createElement('div');
  sectionTitle.className = 'category-title poppins-48 fw-800 py-5';
  sectionTitle.innerText = 'Categories';

  const container = document.createElement('div');
  container.className = 'container m-0 px-100';

  const catList = document.createElement('section');
  catList.className = 'cat-list row g-4';
  catList.id = 'categories';

  items.forEach(({ name, slug }): void => {
    catList.append(CategoryListItem(name, slug));
  });

  catList.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const catItem = target.closest('.cat-list-item') as HTMLElement | null;

    if (catItem?.dataset.slug) {
      const slug = catItem.dataset.slug;
      window.location.href = `/category/${slug}`;
    }
  });

  container.append(catList);
  fragment.append(sectionTitle, container);
  return fragment;
};
