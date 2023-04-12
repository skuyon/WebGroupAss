import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Components/Wrapper';
import Stores, { fetchStores } from './Components/Stores';
import NewStore from './Components/NewStore';
import Store, { fetchStore } from './Components/Store';
import StoreItems, { fetchStoreItems } from './Components/StoreItems.js';
import NewItem from './Components/NewItem.js';
import Item, { fetchItem } from './Components/Item.js';

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
        loader: fetchStore,
        element: (
            <Store />
        ),
      },
      {
        path: "/stores/:store_id/items",
        loader: fetchStoreItems,
        element: (
            <StoreItems />
        ),
      },
      {
        path: "/stores/:store_id/items/new",
        loader: NewItem,
        element: (
            <NewItem />
        ),
      },
      {
        path: "/stores/:store_id/items/:item_id",
        loader: fetchItem,
        element: (
            <Item />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();