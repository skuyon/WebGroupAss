import {Link, useLoaderData} from 'react-router-dom';
//import './StoreItems.css';

export async function fetchStoreItems ({ params }) {
    const response = await fetch(`http://localhost:3001/stores/${params.store_id}/items`);
    console.log(params.store_id);
    console.log(response);
    return await response;
}

export default function StoreItems() {
  const items = useLoaderData();
  console.log(items);
  //className="storeList"
  //stores.forEach(store => console.log(store));

  return (
    <div>
      <p>Hi Mom</p>
      {items.map((item) => (
        <Link to={{
          pathname: `/stores/${item.store_id}/items/${item._id}`,
          state: item._id
        }}><h1>{item.name}</h1></Link>
      ))}
      
    </div>
  );
}
