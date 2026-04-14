import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import App from './App.jsx'
import './css/_index.css';
import routes from './routes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes
  }
]);


createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);