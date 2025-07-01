import './style.css';
import '@shared/shared.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Promo } from '@shared/Promo';

import { initHomePage } from './pages/Home';
import { Menu } from '@shared/Menu';
import { Footer } from '@shared/Footer';
import Navigo from 'navigo';
import { NotFound } from '@shared/NotFound';

const router = new Navigo('/', { hash: true });
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = '';

app.append(Promo(), Menu());

// Container for dynamic page content
const contentContainer = document.createElement('div');
contentContainer.id = 'page-content';
app.appendChild(contentContainer);

app.appendChild(Footer());

// Routing with Navigo
router
  .on({
    '/': () => {
      contentContainer.innerHTML = ''; // Clear previous content
      initHomePage(contentContainer);
    },
    '/cart': () => {
      contentContainer.innerHTML = '';
      // initCartPage(contentContainer);
      contentContainer.innerText = 'Cart Page - under construction';
    },
  })
  .notFound(() => {
    contentContainer.innerHTML = '';
    contentContainer.append(NotFound());
  })
  .resolve();
