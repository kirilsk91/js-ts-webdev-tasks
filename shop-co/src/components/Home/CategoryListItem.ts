export const CategoryListItem = (item: string, slug: string): HTMLElement => {
  const catListItem = document.createElement('div');
  catListItem.className = 'cat-list-item';
  catListItem.dataset.slug = item;
  catListItem.dataset.name = slug;
  const title = document.createElement('h1');
  title.textContent = item;

  catListItem.append(title);
  return catListItem;
};
