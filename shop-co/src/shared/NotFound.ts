export const NotFound = (): HTMLElement => {
  const notFound = document.createElement('div');
  notFound.className = 'not-found';

  notFound.innerHTML =
    /*html*/
    `
    <img src='/assets/not-found.svg'></img>
    <h3>This page doesn't exist. Try something else.</h3>
  `;

  return notFound;
};
