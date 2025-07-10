import './style.css';
import '@shared/shared.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Promo } from '@shared/Promo';
import { Menu } from '@shared/Menu';
import { Footer } from '@shared/Footer';
import Navigo from 'navigo';
import { NotFound } from '@shared/NotFound';
import type { CategoryRoute, ProductRoute } from '@myTypes/types';

import { initCategoryPage } from './pages/Category';
import { initHomePage } from './pages/Home';
import { initProductPage } from './pages/Products';
import { initCartPage } from './pages/Cart';
import { initCheckOutPage } from './pages/Checkout';
import { initConfirmationPage } from './pages/Confirmation';

const router = new Navigo('/', { hash: true });
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = '';
app.append(Promo(), Menu());

const contentContainer = document.createElement('div');
contentContainer.id = 'page-content';
app.append(contentContainer);

app.append(Footer());

router
  .on({
    '/': () => {
      contentContainer.innerHTML = '';
      initHomePage(contentContainer);
    },
    '/category/:slug': ({ data }: CategoryRoute) => {
      contentContainer.innerHTML = '';
      initCategoryPage(contentContainer, data?.slug);
    },
    '/product/:productId': ({ data }: ProductRoute) => {
      contentContainer.innerHTML = '';
      initProductPage(contentContainer, data?.productId);
    },
    '/cart': () => {
      contentContainer.innerHTML = '';
      initCartPage(contentContainer);
    },
    '/checkout': () => {
      contentContainer.innerHTML = '';
      initCheckOutPage(contentContainer);
    },
    '/confirmation': () => {
      contentContainer.innerHTML = '';
      initConfirmationPage(contentContainer);
    },
  })
  .notFound(() => {
    contentContainer.innerHTML = '';
    contentContainer.append(NotFound());
  })
  .resolve();
