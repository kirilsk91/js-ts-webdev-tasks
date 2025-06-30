import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Promo } from './components/HomePage/Promo';
import { Menu } from './components/HomePage/Menu';
import { BrandShowcase } from './components/HomePage/BrandShowcase';
import { CallToAction } from './components/HomePage/Cta/CallToAction';
import { CategoryList } from './components/HomePage/CategoryList';

document
  .querySelector<HTMLDivElement>('#app')!
  .append(Promo(), Menu(), CallToAction(), BrandShowcase(), CategoryList());
