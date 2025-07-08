export const EmptyCart = (content: HTMLElement): HTMLElement => {
  content.innerHTML =
    /*html*/
    `
    <div class='py-3 d-flex flex-column justify-content-center align-items-center h-100'> 
      <img src='/assets/not-found.svg'></img>
      <h3 class='rubik-32 m-0 mt-5'>Your cart is empty.</h3>
    </div>
    `;

  return content;
};
