import type { FormInput } from '@myTypes/types';

export const createFormInput = (formInput: FormInput): HTMLElement => {
  const { id, type, required, pattern, minLength, maxLength, placeholder } =
    formInput;
  const input = document.createElement('input');
  input.type = type;
  input.className = 'form-control-input w-100 my-3';
  input.id = id;
  input.name = id;
  input.placeholder = placeholder ?? '';
  if (required) input.required = true;
  if (pattern) input.pattern = pattern;
  if (minLength) input.minLength = minLength;
  if (maxLength) input.maxLength = maxLength;

  // DELEGATE
  input.addEventListener('focus', () => {
    if (!input.validity.valid) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  input.addEventListener('input', () => {
    if (input.validity.valid) {
      input.classList.remove('error');
    } else {
      input.classList.add('error');
    }
  });

  input.addEventListener('change', () => {
    if (input.validity.valid) {
      input.classList.remove('error');
    } else {
      input.classList.add('error');
    }
  });

  return input;
};
