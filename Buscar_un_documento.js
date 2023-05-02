const { MongoClient, ObjectId} = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("PRUEBAS");
    const movies = database.collection("insertar_varios_documentos");

    // buscamos en la collecion alguien cuyo titulo sea tarta
    const query = { title: "tarta" };

    const options = {
      // sort matched documents in descending order by rating
      sort: { "imdb.rating": -1 },
      // devuelve el id, "title" y el contenido
      projection: { _id: 1, title: 1, imdb: 1 },
    };

    const movie = await movies.findOne(query, options);

    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
