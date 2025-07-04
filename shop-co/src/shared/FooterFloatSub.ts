import { Button } from '@shared/Button';

export const FooterFloatSub = (): HTMLElement => {
  const float = document.createElement('div');
  float.className = 'footer-float';

  float.innerHTML =
    /*html*/
    `
  <div class='col-6'>
  <h1 class='poppins-40 text-color-white'>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
  </div>
  <div class='col-4 float-input-group'>
    <div class='float-input-icon-wrapper'>
      <input placeholder='Enter your email address' class='float-input rubik-17' type='email'/>
      <img src='/assets/email.svg' alt='email icon'/>
    </div>
  </div>
  `;
  const floatInputGroup = float.querySelector('.float-input-group');
  floatInputGroup?.append(
    Button('Subscribe to Newsletter', 'float-button rubik-17 fw-500')
  );
  return float;
};
