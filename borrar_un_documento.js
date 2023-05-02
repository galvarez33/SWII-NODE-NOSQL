//borra el documento que le especifiques, aunque haya varios con el mismo nombre solo borra 1, se borra el que mas tiempo lleve "fifo"


const { MongoClient, ObjectId} = require("mongodb");


const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("PRUEBAS");
    const movies = database.collection("Peliculas");

    // Query for a movie that has title "Annie Hall"
    const query = { name: "avatar" };

    const result = await movies.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
