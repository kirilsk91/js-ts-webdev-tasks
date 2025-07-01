import axios from 'axios';
//ts doesnt like 'types alias'
import type { Category, Product } from '@myTypes/types';

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

export const getProduct = async (prod: string): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(
      `${API_BASE_URL}/products/category/${prod}`
    );
    return response.data;
  } catch (error) {
    console.error('Some error:', error);
    throw error;
  }
};
