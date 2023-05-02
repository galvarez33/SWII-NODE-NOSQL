
//ACTUALIZA DESCRIPCION DE PELICULA




const { MongoClient, ObjectId} = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);



async function run() {
  try {
    const database = client.db("PRUEBAS");
    const movies = database.collection("Peliculas");

    // create a filter for a movie to update
    const filter = { name: "el corredor" };

    // con upsert = true si no se encuentra el documento se crea uno nuevo con los datos dados
    const options = { upsert: true };

    // create a document that sets the plot of the movie
    const updateDoc = {
      $set: {
        desc: `A harvest of random numbers, such as: ${Math.random()}`
      },
    };

    const result = await movies.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
