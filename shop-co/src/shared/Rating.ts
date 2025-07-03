export const Rating = (rt: number): HTMLElement => {
  const rating = document.createElement('div');
  rating.className = 'rating d-flex';

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
  ratingNum.className = 'rating-num';
  ratingNum.innerHTML =
    /*html*/
    `
  <span class='rt'></span>${rt.toString()}/<span class='rt-full'>5</span>
  `;
  rating.append(ratingNum);

  return rating;
};
