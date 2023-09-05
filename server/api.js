const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb'); // Import ObjectId

// Define your MongoDB connection string
const uri = "mongodb://icram:nonmaislol@clusterFirst"; // Update with your correct MongoDB URI

// Define the route to retrieve a message by a hardcoded _id
router.get('/get-message', async (req, res) => {
  try {
    // Hardcoded _id (replace this with your actual _id)
    const hardcodedId = "64f5d3ebfed127df07f4c996";

    // Create a new MongoClient instance
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to MongoDB
    await client.connect();

    // Access the "ika" database and "retrievers" collection
    const database = client.db("ika");
    const collection = database.collection("retrievers");

    // Query your MongoDB collection to get the message by _id
    const result = await collection.findOne({ _id: new ObjectId(hardcodedId) });

    if (result) {
      // Send the message as a JSON response if found
      res.json({ message: result.message });
    } else {
      // If no result is found, send an appropriate response
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
