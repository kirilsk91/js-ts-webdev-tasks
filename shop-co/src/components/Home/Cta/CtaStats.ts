import type { CtaStatPair } from '@myTypes/types';

export const CtaStats = (ctaStats: CtaStatPair[]): HTMLElement => {
  const statWrapper = document.createElement('div');
  statWrapper.className = 'cta-stats-wrapper';

  const fragment = document.createDocumentFragment();

  ctaStats.forEach(({ num, text }) => {
    const ctaStatItem = document.createElement('div');
    ctaStatItem.className = 'cta-stat-item';

    const numberElem = document.createElement('div');
    numberElem.className = 'rubik-40';
    numberElem.textContent = `${Number(num).toLocaleString('en-US')}+`;

    const textElem = document.createElement('div');
    textElem.className = 'rubik-17 text-color-secondary';
    textElem.textContent = text;

    ctaStatItem.append(numberElem);
    ctaStatItem.append(textElem);
    fragment.append(ctaStatItem);
  });

  statWrapper.append(fragment);
  return statWrapper;
};
