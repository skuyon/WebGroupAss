import express, { Router } from 'express';
import { itemsRouter } from './items.js'
import { v4 as uuidv4 } from 'uuid';

// This is an extension of the main thrust of the lab. You may flesh out more endpoints and then _nest_ them under
// the classes route.
//
// The intent is to experiment with relations in MongoDB. See the documentation on embedding documents
// [Embedded documents](https://www.mongodb.com/basics/embedded-mongodb)
// [Embedded documents documentation](https://www.mongodb.com/docs/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/)
const storesRouter = express.Router();

itemsRouter.mergeParams = true;

storesRouter.use("/:store_id/items", itemsRouter);

storesRouter.post('/stores/new', async (req, res) => {
    const requestBody = req.body;
    requestBody._id = uuidv4();

    const db = req.app.get("db");

    try {
      const result = await db.collection('Stores').insertOne(req.body);
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

storesRouter.get('/stores', async (req, res) => {
    // TODO: Fetch the MongoDB connection pool from Application storage
    const db = req.app.get("db");

    // TODO: Retrieve all `class` documents from MongoDB using the `find` method
    // **NOTE**: You'll need to call `toArray` on the result to format it properly
    
    let results = await db.collection("Stores").find({}).toArray();
    
    if(results == null){
      res.status(404);
      res.json({
        status:404,
        message: 'not found',
      })
    }

    console.log(results);
    res.send(results);
  }
);

export { storesRouter };