const a = ['smartphones', 'laptops', 'tops'];

export const CategoryList = (): HTMLElement => {
  const sectionTitle = document.createElement('h1');
  sectionTitle.innerText = 'Category';

  const catList = document.createElement('section');
  catList.className = 'cat-list';

  const fragment = document.createDocumentFragment();

  a.forEach((item) => {
    const catListItem = document.createElement('div');
    catListItem.className = 'cat-list-item';

    const title = document.createElement('h1');
    title.textContent = item;

    catListItem.appendChild(title);
    fragment.appendChild(catListItem);
  });

  catList.append(sectionTitle, fragment);
  return catList;
};
