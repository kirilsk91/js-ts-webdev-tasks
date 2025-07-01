export const CategoryListItem = (text: string): HTMLElement => {
  const catListItem = document.createElement('div');
  catListItem.className = 'cat-list-item';

  const title = document.createElement('h1');
  title.textContent = text;

  catListItem.appendChild(title);
  return catListItem;
};
