import axios from 'axios';
//ts doesnt like 'types alias'
import type {
  BrandsResponse,
  Category,
  ProductsResponse,
  SortOrder,
} from '@myTypes/types';

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
  const params = order ? `&sortBy=price&order=${order}` : '';
  const endpoint = `${API_BASE_URL}/products/category/${prod}?limit=50${params}`;

  try {
    const response = await axios.get<ProductsResponse>(endpoint);
    return response.data;
  } catch (error) {
    console.error('Some error:', error);
    throw error;
  }
};

export const getProductBrands = async (
  prod: string
): Promise<BrandsResponse> => {
  const endpoint = `${API_BASE_URL}/products/category/${prod}?limit=50&select=brand`;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Some error:', error);
    throw error;
  }
};
