import {Link, useLoaderData} from 'react-router-dom';
//import './StoreItems.css';

export async function fetchStoreItems ({ params }) {
    const response = await fetch(`http://localhost:3001/stores/${params.store_id}/items`);
    return await response;
}

export default function StoreItems() {
  const items = useLoaderData();
  console.log("StoreItems.js");
/*old return: 
return (
    <div>
      {items.map((item) => (
        <div key={item._id}> 
          <Link to={`/stores/${item.store_id}/items/${item._id}`}>
            <h1>{item.name}</h1>
          </Link>
        </div>
      ))}  
    </div>
  );
}
*/
  return (
    <div>
      {items.map((item) => (
        <li key={item._id}> 
          <Link to={`/stores/${item.store_id}/items/${item._id}`}>
            <h1>{item.name}</h1>
          </Link>
        </li>
      ))}  
    </div>
  );
}

