import { Router } from 'express';

const itemsRouter = Router();

itemsRouter.get('/', async (req, res) => {
  // TODO: Fetch the MongoDB connection pool from Application storage
  let collection = await Db.collection("Items");
  let results = await collection.find({}).toArray();
  console.log(results);
  res.send(results);
  // TODO: Retrieve all `class` documents from MongoDB using the `find` method
  // **NOTE**: You'll need to call `toArray` on the result to format it properly
});

itemsRouter.get('/:classId', async (req, res) => {
  // TODO: Fetch the MongoDB connection pool from Application storage

  // TODO: Retrieve the specified `class` document from MongoDB using the `find` method and a query
  // **TIP:** Filters are objects that match a key to a value, i.e. `{ name: 'csci446' }`
});

itemsRouter.post('/', async (req, res) => {
  // TODO: Fetch the MongoDB connection pool from Application storage

  // TODO: Create a new document using the `createOne` method in MongoDB
});

itemsRouter.delete('/:classId', async (req, res) => {
  // TODO: Fetch the MongoDB connection pool from Application storage

  // TODO: Delete the specified document using the `deleteOne` method in MongoDB
});

export { itemsRouter };