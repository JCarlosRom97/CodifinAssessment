import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Add from './pages/add';
import Details from './pages/details';
import Cart from './pages/cart';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/add",
    element: <Add/>
  },
  {
    path:"/details",
    element: <Details/>
  },
  {
    path:"/cart",
    element: <Cart/>
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

