import 'nouislider/dist/nouislider.css';
import noUiSlider from 'nouislider';

export const PriceFilterSlider = (): HTMLElement => {
  const filterSlider = document.createElement('div');
  filterSlider.className = 'filter-slider-wrapper';
  filterSlider.innerHTML =
    /*html*/
    `
    <h5>Price</h5>
    <div class="slider"></div>
  `;

  const slider = filterSlider.querySelector('.slider') as HTMLElement;
  console.log(slider);
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      min: 10,
      max: 2000,
    },
    tooltips: [true, true],
    format: {
      to: (value) => Math.round(value),
      from: (value) => Number(value),
    },
  });

  return filterSlider;
};
