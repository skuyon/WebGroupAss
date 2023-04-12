import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Components/Wrapper';
import Stores, { fetchStores } from './Components/Stores';
import NewStore from './Components/NewStore';
//, { NewStore }
import StoreItems, { fetchItems } from './Components/StoreItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/stores",
        loader: fetchStores,
        element: <Stores />,
      },
      {
        path: "/stores/new",
        loader: NewStore,
        element: (
            <NewStore />
        ),
      },
      {
        path: "/stores/:store_id",
        loader: fetchItems,
        element: (
            <StoreItems />
        ),
      },
      // {
      //   path: "/stores/:store_id/items/:item_id",
      //   loader: getStoreItems,
      //   element: (
      //       <StoreItem />
      //   ),
      // },
      // {
      //   path: "/stores/:store_id/items/new",
      //   loader: newStoreItem,
      //   element: (
      //       <NewStoreItem />
      //   ),
      // }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();