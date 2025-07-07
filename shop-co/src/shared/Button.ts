export const Button = (
  buttonContent: string | { src: string; alt: string },
  btnClass: string,
  scrollAction: boolean = false
): HTMLElement => {
  const button = document.createElement('button');
  button.className = btnClass;

  if (typeof buttonContent === 'string') {
    button.innerText = buttonContent;
  } else {
    const img = document.createElement('img');
    img.src = buttonContent.src;
    img.alt = buttonContent.alt ?? '';
    img.style.pointerEvents = 'none';
    button.append(img);
  }

  if (scrollAction) {
    button.addEventListener('click', (): void => {
      const destination = document.getElementById('categories');
      if (destination) {
        destination.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  return button;
};
