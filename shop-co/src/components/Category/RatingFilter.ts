export const RatingFilter = (): HTMLElement => {
  const ratingFilterWrapper = document.createElement('div');
  ratingFilterWrapper.className = 'rating-filter-wrap';

  const title = document.createElement('h5');
  title.textContent = 'Rating';
  ratingFilterWrapper.appendChild(title);

  const savedRatingsLocal = localStorage.getItem('selectedFilterRatings');
  const savedRatings: number[] = savedRatingsLocal
    ? JSON.parse(savedRatingsLocal)
    : [];

  for (let rating = 1; rating <= 5; rating++) {
    const label = document.createElement('label');
    label.className = 'brand-list-item d-flex align-items-center';

    const checkbox = document.createElement('input');
    checkbox.className = 'form-check-input rating-checkbox';
    checkbox.type = 'checkbox';
    checkbox.value = rating.toString();
    checkbox.name = 'rating-filter';

    if (savedRatings.includes(rating)) {
      checkbox.checked = true;
    }

    const starWrapper = document.createElement('span');
    starWrapper.className = 'rating-stars d-flex align-items-center"';
    starWrapper.style.marginLeft = '0.5rem';

    for (let i = 0; i < rating; i++) {
      const star = document.createElement('img');
      star.src = '/assets/full-star.svg';
      star.alt = `${i + 1} star`;
      starWrapper.append(star);
    }

    label.append(checkbox, starWrapper);
    ratingFilterWrapper.append(label);
  }

  ratingFilterWrapper.addEventListener('change', () => {
    //array.from for working with NodeList
    const selectedRatings = Array.from(
      ratingFilterWrapper.querySelectorAll<HTMLInputElement>(
        'input[name="rating-filter"]:checked'
      )
    ).map((el) => Number(el.value));

    localStorage.setItem(
      'selectedFilterRatings',
      JSON.stringify(selectedRatings)
    );
  });

  return ratingFilterWrapper;
};
