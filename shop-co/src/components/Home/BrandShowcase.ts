export const BrandShowcase = (): HTMLElement => {
  const showcase = document.createElement('div');
  showcase.className =
    'brand-showcase col-12 d-flex align-items-center justify-content-around py-5 mb-3';
  showcase.innerHTML =
    /*html*/
    `
    <img src='/assets/versace.svg' alt='versace brand'/>
    <img src='/assets/zara.svg' alt='zara brand'/>
    <img src='/assets/gucci.svg' alt='gucci brand'/>
    <img src='/assets/prada.svg' alt='prada brand'/>
    <img src='/assets/calvin-klein.svg' alt='calvin-klein brand'/>
`;

  return showcase;
};
