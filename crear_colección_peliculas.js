const { MongoClient, ObjectId} = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("PRUEBAS");
    const foods = database.collection("Peliculas");

    // create an array of documents to insert
    const docs = [
      { name: "el corredor", healthy: false,duration:90 },
      { name: "avatar", healthy: true,duration:120  },
      { name: "lo simpson", healthy: false,duration:150  },
      { name: "avatar 2", healthy: true,duration:210 },
      { name: "luna", healthy: false,duration:88  }
    ];

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await foods.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
