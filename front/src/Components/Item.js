import {Link, useLoaderData} from 'react-router-dom';
import './Item.css';

export async function fetchItem ({ params }) {
  const response = await fetch(`http://localhost:3001/stores/${params.store_id}/items/${params.item_id}`);
  return await response;
}

export default function Item() {
  const item = useLoaderData();
  console.log("Item.js");

  return (
    <div>
      <h1 class = "center">Item Details</h1>
      <p><b>Name: </b>{item[0].name}</p>
      <p><b>Price: </b>{item[0].price}</p>
      <p><b>Quantity: </b>{item[0].quantity}</p>
    </div>
  );
}
