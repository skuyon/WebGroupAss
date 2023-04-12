import {Link, useLoaderData} from 'react-router-dom';
import './Store.css';

// await await
export async function fetchStore ({ params }) {
    const response = await fetch(`http://localhost:3001/stores/${params.store_id}`);
    console.log(params.store_id);
    console.log(response);
    return await response;
}

export default function Store({ }) {
  const store = useLoaderData();
  //if(props.location.state.store_id) {
    //console.log(props.location.state.store_id);
  //}
  //console.log("GOOD PLACE")
  //const items = await fetch(`http://localhost:3001/stores/6435a3870fc383c83a904721`);
  console.log(store);
  //const storeID = this.props.location.state;
  //console.log("6435a3870fc383c83a904721");
  //console.log(stores);
  //className="storeList"
  //items.forEach(item => console.log(item));

  return (
    <div>
      <h1>{store[0].name}</h1>
      <Link to={{
          pathname: `/stores/${store[0]._id}/items`
        }}>View All Items in {store[0].name}</Link>
        <br/>
        <Link to={{
          pathname: `/stores/${store[0]._id}/items/new`
        }}>Add New Item to {store[0].name}</Link>


    </div>
  );
}


