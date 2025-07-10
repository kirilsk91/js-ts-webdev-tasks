import { subscribeRequest } from '@services/Subscription';
import { Button } from '@shared/Button';
import { handleError } from '@utils/handleError';
import { fire } from '@utils/sweetalert';

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
      <input required placeholder='Enter your email address' class='float-input rubik-17' type='email'/>
      <img src='/assets/email.svg' alt='email icon'/>
    </div>
  </div>
  `;

  const floatInputGroup = float.querySelector('.float-input-group');
  const subscribeButton = Button(
    'Subscribe to Newsletter',
    'float-button rubik-17 fw-500'
  );
  floatInputGroup?.append(subscribeButton);

  const inputEl = float.querySelector('input.float-input') as HTMLInputElement;

  const validateInput = () => inputEl.validity.valid;

  inputEl.addEventListener('input', validateInput);
  inputEl.addEventListener('change', validateInput);
  inputEl.addEventListener('blur', validateInput);

  validateInput();

  subscribeButton.addEventListener('click', async () => {
    if (!validateInput()) {
      fire({
        title: 'Invalid email.',
        text: 'Please enter a valid email address.',
        icon: 'error',
      });
      return;
    }

    try {
      await subscribeRequest();
    } catch (error) {
      handleError(error);
    }
  });

  return float;
};
