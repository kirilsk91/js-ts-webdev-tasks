import type { CartResponse } from '@myTypes/types';
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

interface CartProduct {
  id: number;
  quantity: number;
}

export const addToCart = async (
  userId: number,
  products: CartProduct[]
): Promise<CartResponse> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/carts/add`,
      {
        userId,
        products,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Some error:', error);
    throw error;
  }
};

export const GetCart = async (cartId: string): Promise<CartResponse> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/carts/${cartId}`);
    return response.data;
  } catch (error) {
    console.error('Some error:', error);
    throw error;
  }
};
