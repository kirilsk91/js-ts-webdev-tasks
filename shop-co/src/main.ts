import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Promo } from './components/HomePage/Promo';
import { Menu } from './components/HomePage/Menu';
import { BrandShowcase } from './components/HomePage/BrandShowcase';
import { CallToAction } from './components/HomePage/Cta/CallToAction';
import { CategoryList } from './components/HomePage/CategoryList';
import { Footer } from './components/HomePage/Footer';
import { getCategories } from './services/Categories';
import type { Categories } from './types';

const doc = document.querySelector<HTMLDivElement>('#app')!;
getCategories()
  .then((categories: Categories[]) => {
    doc.innerHTML = '';

    doc.append(
      Promo(),
      Menu(),
      CallToAction(),
      BrandShowcase(),
      CategoryList(categories),
      Footer()
    );
  })
  .catch((error) => {
    console.error('Failed to fetch categories', error);
  });
