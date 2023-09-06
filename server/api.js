const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb'); 

const uri = "mongodb://icram:nonmaislol@clusterFirst";

router.get('http:localhost:3000/get-message', async (req, res) => {
  try {

    const hardcodedId = "64f5d3ebfed127df07f4c996";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();

    // Access the "ika" database and "retrievers" collection
    const database = client.db("ika");
    const collection = database.collection("retrievers");

    // Query MongoDB collection to get the message by _id
    const result = await collection.findOne({ _id: new ObjectId(hardcodedId) });

    if (result) {
      // Send the message as a JSON response if found
      res.json({ message: result.message });
    } else {
      res.status(404).json({ error: "Message not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  } finally {
    // Ensure that the client connection is closed
    client.close();
  }
});

module.exports = router;
