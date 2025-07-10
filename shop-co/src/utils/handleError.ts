import axios from 'axios';

import { fire } from './sweetalert';

// never - specific type when error is always being thrown
export function handleError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    fire({
      title: 'Request failed',
      text: error.message,
      icon: 'error',
    });
    console.error('Axios error:', error);
  } else if (error instanceof Error) {
    fire({
      title: 'Unexpected error',
      text: error.message,
      icon: 'error',
    });
    console.error('Error:', error);
  } else {
    fire({
      title: 'Unknown error',
      text: 'An unknown error occurred',
      icon: 'error',
    });
    console.error('Unknown error:', error);
  }
  throw error;
}
