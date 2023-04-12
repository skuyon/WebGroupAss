import { Router } from 'express';

const itemsRouter = Router();

itemsRouter.get('/', async (req, res) => {
  // TODO: Fetch the MongoDB connection pool from Application storage
  const db = req.app.get("db");
  //console.log("itemsRouter get called - getting all");
  const storeId = req.params.store_id;
  //console.log(storeId);
  //return all items for a store
  // TODO: Retrieve all `class` documents from MongoDB using the `find` method
  // try {
  //   queryableId = new ObjectId(storeId);
  // } catch (e) {
  //   queryableId = storeId;
  // }
  try {
    const items = await db.collection("Items").find({ store_id: storeId }).toArray();
    if (items === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }
    // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
    // Express' `Response` object
    //console.log("Items: ");
    //console.log(items);
    res.send(items);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
  // **NOTE**: You'll need to call `toArray` on the result to format it properly
});

itemsRouter.get('/:item_id', async (req, res) => {
  // TODO: Fetch the MongoDB connection pool from Application storage
  const db = req.app.get("db");
  const itemId = req.params.item_id;
  console.log(itemId);
  //specific item from a specific store
  // TODO: Retrieve the specified `class` document from MongoDB using the `find` method and a query
  // **TIP:** Filters are objects that match a key to a value, i.e. `{ name: 'csci446' }`
  try {
    const item = await db.collection("Items").find({ _id: itemId }).toArray();
    if (item === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }
    // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
    // Express' `Response` object
    console.log("Item: ");
    console.log(item);
    res.send(item);
  }
  catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

itemsRouter.post('/new', async (req, res) => {
  // TODO: Fetch the MongoDB connection pool from Application storage
  const db = req.app.get("db");
  console.log("Post new item called");
  // TODO: Create a new document using the `createOne` method in MongoDB
  const requestBody = req.body;
  requestBody._id = uuidv4();
  console.log(requestBody);

  // TODO: Fetch the MongoDB connection pool from Application storage

  // try {
  //   const result = await db.collection('Items').insertOne(req.body);
  //   console.log(result);
  //   res.status(201);
  //   res.json({
  //     status: 201,
  //     message: 'created',
  //   });
  // } catch (e) {
  //   console.log(e);
  //   res.status(500);
  //   res.json({
  //     status: 500,
  //     message: e,
  //   });
  // }
});

export { itemsRouter };