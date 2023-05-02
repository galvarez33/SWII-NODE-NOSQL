
const { MongoClient, ObjectId} = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("PRUEBAS");
    const movies = database.collection("Peliculas");

    // query for movies that have a runtime less than 15 minutes
    const query = { duration: { $lt: 150 } };

    const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { name: 1 },
      // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 0, name: 1,duration:1, imdb: 1 },
    };

    const cursor = movies.find(query, options);

    // print a message if no documents were found
    if ((await movies.countDocuments(query)) === 0) {
      console.log("No documents found!");
    }

    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
