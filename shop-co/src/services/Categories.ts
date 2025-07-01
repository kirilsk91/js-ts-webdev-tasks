import axios from 'axios';
import type { Category } from '../types';

const API_BASE_URL = 'https://dummyjson.com';

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>(
      `${API_BASE_URL}/products/categories`
    );
    return response.data;
  } catch (error) {
    console.error('Some error:', error);
    throw error;
  }
};
