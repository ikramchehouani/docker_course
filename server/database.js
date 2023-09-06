
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://icram:nonmaislol@clusterfirst.kmoxvfv.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const database = client.db("ika");
    const collection = database.collection("retrievers");

    // Query collection to get the message
    const result = await collection.findOne({ "_id": new ObjectId("64f5d3ebfed127df07f4c996") });

    console.log("Message from MongoDB:", result.message);
  } finally {
    // Ensures that the client will close when finish/error
    await client.close();
  }
}
run().catch(console.dir);
