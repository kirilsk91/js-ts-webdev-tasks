import type { Product, StoredProduct } from '@myTypes/types';
import { Price } from '@shared/Price';
import { Rating } from '@shared/Rating';
import { ProductGeneralInfo } from './ProductGeneralInfo';
import { ProductButtonGroup } from './ProductButtonGroup';
import { updateCartUI } from '@utils/updateCartUI';
// import { addToCart, GetCart } from '@services/Cart';

export const ProductInfo = (product: Product): HTMLElement => {
  const {
    id,
    title,
    rating,
    price,
    discountPercentage,
    description,
    brand,
    availabilityStatus,
    stock,
    thumbnail,
  } = product;
  const storedCart: Array<{ product: StoredProduct; quantity: number }> =
    JSON.parse(localStorage.getItem('cart-items') || '[]');

  const initialQuantity = 0;

  const productInfoWrap = document.createElement('div');
  productInfoWrap.className = 'product-info-wrap col-6 ps-4';

  productInfoWrap.innerHTML =
    /*html*/
    `
  <div class='product-info d-flex h-100 justify-content-between flex-column'>
    <div class='poppins-40'>${title}</div>
  </div>
  `;

  const onAddToCart = (newQuantity: number) => {
    const index = storedCart.findIndex(
      (item) => item.product.id === product.id
    );

    const productToStore: StoredProduct = {
      id,
      title,
      price,
      discountPercentage,
      thumbnail,
    };

    if (index !== -1) {
      storedCart[index].quantity = newQuantity;
    } else {
      storedCart.push({ product: productToStore, quantity: newQuantity });
    }
    /*commented out calls for the sake of the integrity of the task.
    //i could store response data to localStorage and/or later fetch a cart with id,
    // but as dummyJson responses are hardcoded and they dont reflect the items i added
    // to the cart myself, i will use localStorage here
    */

    // const productsToAdd = storedCart.map((item) => ({
    //   id: item.product.id,
    //   quantity: item.quantity,
    // }));

    // addToCart(1, productsToAdd)
    //   .then((data) => console.log('Items in cart:', data))
    //   .catch((err) => console.error(err));

    localStorage.setItem('cart-items', JSON.stringify(storedCart));
    updateCartUI();
  };

  const productInfo = productInfoWrap.querySelector('.product-info');
  productInfo?.append(
    Rating(rating),
    Price(price, discountPercentage),
    ProductGeneralInfo(description, brand, stock, availabilityStatus),
    ProductButtonGroup(onAddToCart, initialQuantity)
  );

  return productInfoWrap;
};
