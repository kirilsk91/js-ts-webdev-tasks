import { Button } from '@shared/Button';

export const FooterFloatSub = (): HTMLElement => {
  const float = document.createElement('div');
  float.className = 'footer-float';

  float.innerHTML =
    /*html*/
    `
  <div class='col-6'>
  <h1>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
  </div>
  <div class='col-4'>
    <div class='float-input-icon-wrapper'>
      <input placeholder='Enter your email address' class='float-input' type='email'/>
      <img src='/assets/email.svg' alt='email icon'/>
    </div>
    <span id="float-btn-placeholder"></span>
  </div>
  `;

  const floatBtn = Button('Subscribe to Newsletter', 'float-button');
  const placeholder = float.querySelector('#float-btn-placeholder');
  placeholder?.append(floatBtn);
  return float;
};
