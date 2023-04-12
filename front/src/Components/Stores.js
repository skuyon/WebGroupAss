import {Link, useLoaderData} from 'react-router-dom';
import './Stores.css';

export default function Stores() {
  const stores = useLoaderData();
  console.log("Stores.js");

  return (
    <div>
      <link rel="stylesheet" href="./Stores.css"/>
      <div id="storeList">
        {stores.map((store) => (
        <div className="storeCard" key={store._id}>
          <Link to={`${store._id}`}><h2>{store.name}</h2></Link>
        </div>
      ))}
      </div>
    </div>
  );
}

async function fetchStores() {
  const response = await fetch(`http://localhost:3001/stores`);
  return await response;
}

export { fetchStores };