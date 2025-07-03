//ts doesnt like 'types alias'
import type { Product } from '@myTypes/types';
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const getProduct = async (productId: string): Promise<Product> => {
  try {
    const response = await axios.get<Product>(
      `${API_BASE_URL}/product/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error('Some error:', error);
    throw error;
  }
};
