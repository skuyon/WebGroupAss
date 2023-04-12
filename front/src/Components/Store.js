import {Link, useLoaderData} from 'react-router-dom';
import './Store.css';

export async function fetchStore ({ params }) {
    const response = await fetch(`http://localhost:3001/stores/${params.store_id}`);
    return await response;
}

export default function Store({ }) {
  const store  = useLoaderData();
  const storeID = store[0]._id;
  const storeName = store[0].name;
  console.log("Store.js");

  return (
    <div>
      <h1>{store[0].name}</h1>
      <Link to={{
          pathname: `/stores/${storeID}/items`,
        }}>View All Items in {storeName}</Link>
        <br/>
        <Link to={{
          pathname: `/stores/${storeID}/items/new`
        }}>Add New Item to {storeName}</Link>


    </div>
  );
}


