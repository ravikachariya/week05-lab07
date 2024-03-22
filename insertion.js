const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Database Name
const dbName = "blog";

// Collection Name
const collectionName = "posts";

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Insert a document
    const insertResult1 = await collection.insertOne({
      title: "Post Title 1a",
      body: "Body of post 1a",
      category: "News",
      likes: 1,
      tags: ["news", "events"],
      date: new Date(),
    });
    console.log(`Document inserted with id: ${insertResult1.insertedId}`);

    // Insert another document
    const insertResult2 = await collection.insertOne({
      title: "Post Title 1b",
      body: "Body of post 1b",
      category: "Tech",
      likes: 3,
      tags: ["Tech", "events"],
      date: new Date(),
    });
    console.log(`Document inserted with id: ${insertResult2.insertedId}`);
  } finally {
    // Close the connection
    await client.close();
    console.log("Connection closed");
  }
}

main().catch(console.error);
