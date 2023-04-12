import {Link, useLoaderData} from 'react-router-dom';
//import './Item.css';

export async function fetchItem ({ params }) {
  //console.log(params);
  const response = await fetch(`http://localhost:3001/stores/${params.store_id}/items/${params.item_id}`);
  console.log(response);
  return await response;
}

export default function Item() {
  const item = useLoaderData();
  //console.log(stores);
  //className="storeList"
  //stores.forEach(store => console.log(store));
  console.log(item);

  return (
    <div>
      <p>Name: {item[0].name}</p>
      <p>Price: {item[0].price}</p>
      <p>Quantity: {item[0].quantity}</p>
    </div>
  );
}