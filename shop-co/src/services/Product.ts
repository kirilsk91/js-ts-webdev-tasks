//ts doesnt like 'types alias'
import type { Product } from '@myTypes/types';
import { fire } from '@utils/sweetalert';
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const getProduct = async (productId: string): Promise<Product> => {
  try {
    const response = await axios.get<Product>(
      `${API_BASE_URL}/product/${productId}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      fire({
        title: 'Request failed',
        text: error.message,
        icon: 'error',
      });
      console.error('Some error:', error);
    } else {
      fire({
        title: 'Unexpected error',
        text: (error as Error).message,
        icon: 'error',
      });
      console.error('Some error:', error);
    }
    throw error;
  }
};
