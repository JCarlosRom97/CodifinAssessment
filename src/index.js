import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Details from './Pages/Details';
import Cart from './Pages/Cart';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/add",
    element: <Add/>
  },
  {
    path:"/detail/:sku",
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

