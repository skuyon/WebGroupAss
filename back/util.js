import { MongoClient } from 'mongodb';

// We stick this function in the `util.js` file to avoid cyclical imports and as a convention
// for anything not directly related to the application

//const uri = "mongodb+srv://lucas:Password@cluster0.kmtaml6.mongodb.net/?"

export async function connectMongodb() {
  const client = new MongoClient('mongodb://localhost:27017');
  //const client = new MongoClient(uri);
  await client.connect();

  //const databasesList = await client.db().admin().listDatabases();
  //console.log("Databases:");
  //databasesList.databases.forEach(db => console.log(` - ${db.name}`));
 
  return client.db('local');
}