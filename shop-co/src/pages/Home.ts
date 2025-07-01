import '@styles/homePage.css';
import type { Category } from '@myTypes/types';
import { CallToAction } from '@components/Home/Cta/CallToAction';
import { BrandShowcase } from '@components/Home/BrandShowcase';
import { CategoryList } from '@components/Home/CategoryList';
import { getCategories } from '@services/Categories';

export const initHomePage = async (
  dyamicContainer: HTMLElement
): Promise<void> => {
  try {
    const categories: Category[] = await getCategories();
    dyamicContainer.innerHTML = '';

    dyamicContainer.append(
      CallToAction(),
      BrandShowcase(),
      CategoryList(categories)
    );
  } catch (error) {
    console.error('Some error', error);
    //add placeholder
    dyamicContainer.innerHTML = '<p>Failed to load content.</p>';
  }
};
