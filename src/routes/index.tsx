import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayoutTwo from '../components/layout2';
import App from '../App';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <LayoutTwo />,
  },
  {
    path: '/full-screen',
    element: <App />,
  },
]);
