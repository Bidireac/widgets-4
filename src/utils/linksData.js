import React from 'react';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PaymentIcon from '@material-ui/icons/Payment';

const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <PaymentIcon />, url: '/products' },
      { label: 'terminal', icon: <PaymentIcon />, url: '/products' },
      { label: 'connect', icon: <PaymentIcon />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <ReceiptIcon />, url: '/products' },
      { label: 'libraries', icon: <ReceiptIcon />, url: '/products' },
      { label: 'help', icon: <ReceiptIcon />, url: '/products' },
      { label: 'billing', icon: <ReceiptIcon />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <NextWeekIcon />, url: '/products' },
      { label: 'customers', icon: <NextWeekIcon />, url: '/products' },
    ],
  },
];

export default sublinks;
