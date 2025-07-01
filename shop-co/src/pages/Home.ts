import '@styles/homePage.css';
import type { Category } from '../types';
import { CallToAction } from '../components/Home/Cta/CallToAction';
import { BrandShowcase } from '../components/Home/BrandShowcase';
import { CategoryList } from '../components/Home/CategoryList';
import { getCategories } from '../services/Categories';

export const initHomePage = async (container: HTMLElement): Promise<void> => {
  try {
    const categories: Category[] = await getCategories();
    container.innerHTML = '';

    container.append(CallToAction(), BrandShowcase(), CategoryList(categories));
  } catch (error) {
    console.error('Failed to fetch categories', error);
    container.innerHTML = '<p>Failed to load content.</p>';
  }
};
