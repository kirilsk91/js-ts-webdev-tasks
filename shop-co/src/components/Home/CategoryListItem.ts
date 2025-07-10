export const CategoryListItem = (item: string, slug: string): HTMLElement => {
  const catListItemWrap = document.createElement('div');
  catListItemWrap.className = 'col-6 col-lg-3';

  const catListItem = document.createElement('div');
  catListItem.className = 'cat-list-item d-flex align-items-center';
  catListItem.dataset.slug = slug;
  catListItem.dataset.name = item;

  const title = document.createElement('h1');
  title.className = 'rubik-64';
  title.textContent = item;

  catListItem.append(title);
  catListItemWrap.append(catListItem);
  return catListItemWrap;
};
