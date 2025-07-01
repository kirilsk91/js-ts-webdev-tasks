export const CategoryListItem = (item: string): HTMLElement => {
  const catListItem = document.createElement('div');
  catListItem.className = 'cat-list-item';

  const title = document.createElement('h1');
  title.textContent = item;

  catListItem.appendChild(title);
  return catListItem;
};
