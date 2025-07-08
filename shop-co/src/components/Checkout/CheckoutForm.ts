import { createFormInput } from '@utils/createInputField';
import { inputData } from '@utils/data';

export const CheckoutForm = (): HTMLElement => {
  const checkoutForm = document.createElement('form');

  inputData.forEach((input) => {
    checkoutForm.append(createFormInput(input));
  });

  return checkoutForm;
};
