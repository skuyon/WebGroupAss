import './NewStore.css';

export default function NewStore({}){
    var name;
    const nameChange = (event) => {
        name = event.target.value;
        console.log("name: " + name);
    };
    
    return (
        <div>
            <link rel="stylesheet" href="./NewStore.css"/>
            <h1>New Store Form</h1>
            <form id="todoForm" onSubmit={ () => handleSubmit({name}) }>
                <div id="storeNew">
                    Store Name: 
                    <input type="text" name="name" onInput={nameChange}></input>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export async function handleSubmit({ name = "filler"}) {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": name,
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3001/stores/new", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}