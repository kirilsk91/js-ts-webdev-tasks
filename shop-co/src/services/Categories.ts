import axios from 'axios';
//ts doesnt like 'types alias'
import type { Category, ProductsResponse, SortOrder } from '@myTypes/types';

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

export const getProducts = async (
  prod: string,
  order?: SortOrder
): Promise<ProductsResponse> => {
  const params = order ? `?sortBy=price&order=${order}` : '';
  const endpoint = `${API_BASE_URL}/products/category/${prod}${params}`;

  try {
    const response = await axios.get<ProductsResponse>(endpoint);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};
