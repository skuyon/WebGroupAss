import {Link, useLoaderData} from 'react-router-dom';
import './StoreItems.css';

// await await
export async function fetchItems ({ params }) {
    const response = await fetch(`http://localhost:3001/stores/${params.store_id}`);
    console.log(params.store_id);
    console.log(response);
    return await response;
}

export default function Stores({ }) {
  const items = useLoaderData();
  //if(props.location.state.store_id) {
    //console.log(props.location.state.store_id);
  //}
  //console.log("GOOD PLACE")
  //const items = await fetch(`http://localhost:3001/stores/6435a3870fc383c83a904721`);
  console.log(items);
  //const storeID = this.props.location.state;
  //console.log("6435a3870fc383c83a904721");
  //console.log(stores);
  //className="storeList"
  //items.forEach(item => console.log(item));

  return (
    <div>
      { items.map((item) => (
        <div>
           <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <h1>{item.quantity}</h1> 
        </div>
      ))} 
    </div>
  );
}


