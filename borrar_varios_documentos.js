//borra el documento que le especifiques


const { MongoClient, ObjectId} = require("mongodb");


const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);


async function run() {
  try {
    const database = client.db("PRUEBAS");
    const movies = database.collection("Peliculas");
    // Query for all movies with a title containing the string "Santa"
    const query = { name: { $regex: "luna" } };

    const result = await movies.deleteMany(query);
    console.log("Deleted " + result.deletedCount + " documents");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
