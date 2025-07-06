import { Button } from './Button';

export const NotFound = (): HTMLElement => {
  const notFound = document.createElement('div');
  notFound.className =
    'd-flex flex-column justify-content-center align-items-center h-100';

  notFound.innerHTML =
    /*html*/
    `
    <img src='/assets/not-found.svg'></img>
    <h3 class='rubik-32 mt-5'>This page doesn't exist. Try something else.</h3>
  `;

  const goBackBtn = Button(
    'Go back',
    'default-button text-color-white rubik-14 fw-500 px-4 mt-3'
  );

  goBackBtn.addEventListener('click', () => {
    window.history.back();
  });
  notFound.append(goBackBtn);
  return notFound;
};
