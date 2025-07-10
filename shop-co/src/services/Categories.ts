import axios from 'axios';
//ts doesnt like 'types alias'
import type {
  BrandsResponse,
  Category,
  ProductsResponse,
  SortOrder,
} from '@myTypes/types';
import { handleError } from '@utils/handleError';

const API_BASE_URL = 'https://dummyjson.com';

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>(
      `${API_BASE_URL}/products/categories`
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getProducts = async (
  prod: string,
  order?: SortOrder
): Promise<ProductsResponse> => {
  const params = order ? `&sortBy=price&order=${order}` : '';
  const endpoint = `${API_BASE_URL}/products/category/${prod}?limit=50&select=thumbnail,title,rating,price,discountPercentage,brand,id${params}`;

  try {
    const response = await axios.get<ProductsResponse>(endpoint);
    return response.data;
  } catch (error) {
    handleError(error);
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
    handleError(error);
  }
};
