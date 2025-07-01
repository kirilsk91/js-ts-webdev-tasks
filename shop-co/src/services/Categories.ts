import axios from 'axios';
import type { Categories } from '../types';

const API_BASE_URL = 'https://dummyjson.com';

export const getCategories = async (): Promise<Categories[]> => {
  try {
    const response = await axios.get<Categories[]>(
      `${API_BASE_URL}/products/categories`
    );
    return response.data;
  } catch (error) {
    console.error('Some error:', error);
    throw error;
  }
};
