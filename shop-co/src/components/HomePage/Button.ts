export const Button = (buttonText: string): HTMLElement => {
  const button = document.createElement('button');
  button.className = 'default-button';

  button.innerText = buttonText;

  return button;
};
