import { Router } from 'express';

const itemsRouter = Router();

itemsRouter.get('/', async (req, res) => {
  // Fetch the MongoDB connection pool from Application storage
  const db = req.app.get("db");
  const storeId = req.params.store_id;
  //return all items for a store
  
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
    res.send(items);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

itemsRouter.get('/:item_id', async (req, res) => {
  // Fetch the MongoDB connection pool from Application storage
  const db = req.app.get("db");
  const itemId = req.params.item_id;
  console.log(itemId);
  //specific item from a specific store
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
    res.send(item);
  }
  catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

itemsRouter.post('/new', async (req, res) => {
  // Fetch the MongoDB connection pool from Application storage
  const db = req.app.get("db");
  console.log("Post new item called");
  // TODO: Create a new document using the `createOne` method in MongoDB
  const requestBody = req.body;
  requestBody._id = uuidv4();
  console.log(requestBody);

  // TODO: Fetch the MongoDB connection pool from Application storage

  try {
    const result = await db.collection('Items').insertOne(req.body);
    console.log(result);
    res.status(201);
    res.json({
      status: 201,
      message: 'created',
    });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.json({
      status: 500,
      message: e,
    });
  }
});

export { itemsRouter };