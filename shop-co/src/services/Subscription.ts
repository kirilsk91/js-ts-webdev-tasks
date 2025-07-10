import { fire } from '@utils/sweetalert';

export const subscribeRequest = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    const floatInput = document.querySelector(
      '.float-input'
    ) as HTMLInputElement;

    if (floatInput) floatInput.value = '';
    setTimeout(() => {
      fire({
        title: 'Success!',
        text: 'You have just signed up to receive our hourly newsletter—prepare yourself for an endless flood of unsolicited advice, pointless updates, and offers you’ll definitely want to ignore.',
        icon: 'success',
      });

      resolve();
    }, 900);
  });
};
