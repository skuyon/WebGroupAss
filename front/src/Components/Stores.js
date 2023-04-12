import {Link, useLoaderData} from 'react-router-dom';
import './Stores.css';

export default function Stores() {
  const stores = useLoaderData();
  //console.log(stores);
  //className="storeList"
  stores.forEach(store => console.log(store));

  return (
    <div>
      {stores.map((store) => (
        <Link to={{
          pathname: `/stores/${store._id}`,
          state: store._id
        }}><h1>{store.name}</h1></Link>
      ))}
      
    </div>
  );
}

// await await
async function fetchStores() {
  const response = await fetch(`http://localhost:3001/stores`);
  //console.log(response);
  return await response;
}

export { fetchStores };