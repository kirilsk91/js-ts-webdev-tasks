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

  return input;
};
