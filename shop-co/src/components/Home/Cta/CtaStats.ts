import type { CtaStatPair } from '@myTypes/types';

export const CtaStats = (ctaStats: CtaStatPair[]): HTMLElement => {
  const statWrapper = document.createElement('div');
  statWrapper.className = 'cta-stats-wrapper';

  const fragment = document.createDocumentFragment();

  ctaStats.forEach(({ num, text }) => {
    const ctaStatItem = document.createElement('div');
    ctaStatItem.className = 'cta-stat-item';

    const numberElem = document.createElement('div');
    numberElem.className = 'cta-stat-number';
    numberElem.textContent = `${Number(num).toLocaleString('en-US')}+`;

    const textElem = document.createElement('div');
    textElem.className = 'cta-stat-text';
    textElem.textContent = text;

    ctaStatItem.appendChild(numberElem);
    ctaStatItem.appendChild(textElem);
    fragment.appendChild(ctaStatItem);
  });

  statWrapper.appendChild(fragment);
  return statWrapper;
};
