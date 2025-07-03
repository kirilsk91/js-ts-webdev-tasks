import 'nouislider/dist/nouislider.css';
import noUiSlider from 'nouislider';
import type { API } from 'nouislider';

//some copy pasted stuff from stack to deal with types
type SliderHTMLElement = HTMLElement & { noUiSlider: API };

export const PriceFilterSlider = (): HTMLElement => {
  const filterSlider = document.createElement('div');
  filterSlider.className = 'filter-slider-wrapper';
  filterSlider.innerHTML = `
    <h5>Price</h5>
    <div class="slider mb-3"></div>
    <div class="d-flex gap-2">
      <input type="number" class="min-price-input form-control" min="0" max="2000" />
      <input type="number" class="max-price-input form-control" min="0" max="2000" />
    </div>
  `;

  const slider = filterSlider.querySelector('.slider') as SliderHTMLElement;
  const minInput = filterSlider.querySelector(
    '.min-price-input'
  ) as HTMLInputElement;
  const maxInput = filterSlider.querySelector(
    '.max-price-input'
  ) as HTMLInputElement;

  noUiSlider.create(slider, {
    start: [0, 2000],
    connect: true,
    range: { min: 0, max: 2000 },
    format: {
      to: (value) => Math.round(value).toString(),
      from: (value) => parseInt(value),
    },
  });

  const sliderInstance = slider.noUiSlider;

  sliderInstance.on('update', (values) => {
    minInput.value = values[0].toString();
    maxInput.value = values[1].toString();
  });

  sliderInstance.on('change', (values) => {
    localStorage.setItem(
      'selectedPriceRange',
      JSON.stringify(values.map((v) => Number(v)))
    );
  });

  minInput.addEventListener('change', () => {
    const minValue = Math.max(Number(minInput.value), 0);
    const maxValue = Math.min(Number(maxInput.value), 2000);
    sliderInstance.set([minValue, null]);
    localStorage.setItem(
      'selectedPriceRange',
      JSON.stringify([minValue, maxValue])
    );
  });

  maxInput.addEventListener('change', () => {
    const minValue = Math.max(Number(minInput.value), 0);
    const maxValue = Math.min(Number(maxInput.value), 2000);
    sliderInstance.set([null, maxValue]);
    localStorage.setItem(
      'selectedPriceRange',
      JSON.stringify([minValue, maxValue])
    );
  });

  return filterSlider;
};
