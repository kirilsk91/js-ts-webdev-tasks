import type { SweetAlert } from '@myTypes/types';
import Swal from 'sweetalert2';

export const fire = ({
  title = '',
  text = '',
  icon = 'success',
  timer = 4000,
  showConfirmButton = false,
}: SweetAlert): void => {
  Swal.fire({
    title,
    text,
    icon,
    timer,
    showConfirmButton,
    timerProgressBar: true,
    toast: true,
    position: 'bottom-start',
  });
};
