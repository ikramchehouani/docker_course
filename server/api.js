const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Define your MongoDB connection string
const uri = "mongodb://icram:nonmaislol@clusterFirst";

router.get('/get-message', async (req, res) => {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const database = client.db("ika");
    const collection = database.collection("retrievers");

    // Query your MongoDB collection to get the message
    const result = await collection.findOne({ key: "message" });

    // Send the message as a JSON response
    res.json({ message: result.message });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  } finally {
    client.close();
  }
});

module.exports = router;
