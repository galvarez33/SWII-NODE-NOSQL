//Modifica campo de una colleccion

const { MongoClient, ObjectId} = require("mongodb");


const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("PRUEBAS");
    const movies = database.collection("Peliculas");

    // create a query for a movie to update
    const query = { name: { $regex: "luna" } };
    // create a new document that will be used to replace the existing document
    const replacement = {
      name: `la luna parte ${Math.floor(Math.random() * 1000) + 1}`,
    };

    const result = await movies.replaceOne(query, replacement);
    console.log(`Modified ${result.modifiedCount} document(s)`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
