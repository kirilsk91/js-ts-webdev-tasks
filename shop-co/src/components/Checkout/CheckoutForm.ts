import { createFormInput } from '@utils/createInputField';
import { inputData } from '@utils/data';

export const CheckoutForm = (): HTMLElement => {
  const checkoutForm = document.createElement('form');
  inputData.forEach((input) => {
    checkoutForm.append(createFormInput(input));
  });

  const inputElements = checkoutForm.querySelectorAll<HTMLInputElement>(
    '.form-control-input'
  );

  inputElements.forEach((inputEl) => {
    const validateInput = () => {
      if (inputEl.validity.valid) {
        inputEl.classList.remove('error');
      } else {
        inputEl.classList.add('error');
      }
    };

    inputEl.addEventListener('focus', validateInput);
    inputEl.addEventListener('input', validateInput);
    inputEl.addEventListener('change', validateInput);
  });
  return checkoutForm;
};
