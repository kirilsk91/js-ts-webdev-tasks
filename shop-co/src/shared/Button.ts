export const Button = (
  buttonText: string,
  btnClass: string,
  scrollAction: boolean = false
): HTMLElement => {
  const button = document.createElement('button');
  button.className = btnClass;
  button.innerText = buttonText;

  if (scrollAction) {
    button.addEventListener('click', () => {
      const destination = document.getElementById('categories');
      if (destination) {
        destination.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  return button;
};
