import {Link, useLoaderData} from 'react-router-dom';
import './Stores.css';

export default function Stores() {
  const stores = useLoaderData();
  //console.log(stores);
  stores.forEach(store => console.log(store));

  return (
    <div className="storeList">
      {stores.map((store) => {
        <p key={store._id}>{store.name}</p>
      })}
    </div>
  );
}

async function fetchStores() {
  const response = await fetch(`http://localhost:3001/stores`);
  //console.log(response);
  return await response;
}

export { fetchStores };