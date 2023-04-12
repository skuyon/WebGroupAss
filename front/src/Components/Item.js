import {Link, useLoaderData} from 'react-router-dom';
//import './Item.css';

export async function fetchItem ({ params }) {
  const response = await fetch(`http://localhost:3001/stores/${params.store_id}/items/${params.item_id}`);
  return await response;
}

export default function Item() {
  const item = useLoaderData();
  console.log("Item.js");

  return (
    <div>
      <p>Name: {item[0].name}</p>
      <p>Price: {item[0].price}</p>
      <p>Quantity: {item[0].quantity}</p>
    </div>
  );
}