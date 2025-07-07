export const updateCartUI = (root: HTMLElement | Document = document): void => {
  const badge = root.querySelector('#cart-badge') as HTMLElement | null;
  if (!badge) return;

  const cartItems = JSON.parse(localStorage.getItem('cart-items') || '[]');
  const numOfProductsInACart = cartItems.length;

  if (numOfProductsInACart > 0) {
    badge.textContent = numOfProductsInACart.toString();
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }
};
