import type { FooterLinks, FormInput } from '@myTypes/types';

export const footerLinkData: FooterLinks[] = [
  {
    colTitle: 'Company',
    links: ['About', 'Features', 'Works', 'Career'],
  },
  {
    colTitle: 'Help',
    links: [
      'Customer Support',
      'Delivery Details',
      'Terms & Conditions',
      'Privacy Policy',
    ],
  },
  {
    colTitle: 'Resources',
    links: ['Account', 'Manage Delivieries', 'Orders', 'Payments'],
  },
  {
    colTitle: 'Faq',
    links: [
      'Free eBooks',
      'Development Tutorial',
      'How to - Blog',
      'Youtube Playlist',
    ],
  },
];

export const inputData: FormInput[] = [
  {
    id: 'firstName',
    type: 'text',
    required: true,
    minLength: 3,
    maxLength: 32,
    placeholder: 'First name',
  },
  {
    id: 'lastName',
    type: 'text',
    required: true,
    minLength: 3,
    maxLength: 32,
    placeholder: 'Last name',
  },
  {
    id: 'maidenName',
    type: 'text',
    required: true,
    minLength: 3,
    maxLength: 32,
    placeholder: 'Maiden name',
  },
  {
    id: 'email',
    type: 'email',
    required: true,
    placeholder: 'Email',
  },
  {
    id: 'phone',
    type: 'text',
    required: true,
    pattern: '^\\+[0-9]{1,3}(\\s[0-9]{2,4}){2,4}$',
    placeholder: 'Phone number',
  },
  {
    id: 'address',
    type: 'text',
    required: true,
    pattern: '^\\d{4}\\s.+$',
    placeholder: 'Adress',
  },
  {
    id: 'city',
    type: 'text',
    required: true,
    placeholder: 'City',
  },
  {
    id: 'postalCode',
    type: 'text',
    required: true,
    placeholder: 'Postal code',
  },
];
