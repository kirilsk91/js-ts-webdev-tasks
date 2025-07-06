export const Rating = (rt: number): HTMLElement => {
  const rating = document.createElement('div');
  rating.className = 'd-flex align-items-center py-3';

  const numOfFullStars = Math.floor(rt);
  const shouldAddhalfStar = rt - numOfFullStars >= 0.5;
  let i = 0;
  while (i < numOfFullStars) {
    const fullStar = document.createElement('img');
    fullStar.src = '/assets/full-star.svg';
    fullStar.alt = 'star';
    rating.append(fullStar);
    i++;
  }

  if (shouldAddhalfStar) {
    const halfStar = document.createElement('img');
    halfStar.src = '/assets/half-star.svg';
    halfStar.alt = 'half star';
    rating.append(halfStar);
  }

  const ratingNum = document.createElement('span');
  ratingNum.className = 'rating-num rubik-17 text-color-primary ms-2';
  ratingNum.innerHTML =
    /*html*/
    `
    ${rt.toString()}/<span class='text-color-secondary'>5</span>
  `;
  rating.append(ratingNum);

  return rating;
};
