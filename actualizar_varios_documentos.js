
//AÑADE UN CAMPO A TODOS LOS DOCUMENTOS QUE CONTENGAN PUNTUACION =BUENA


const { MongoClient, ObjectId} = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);



async function run() {
  try {
    const database = client.db("PRUEBAS");
    const movies = database.collection("Peliculas");

    // create a filter to update all movies with a 'G' rating
    const filter = { puntuacion: "Buena" };

    // increment every document matching the filter with 2 more comments
    const updateDoc = {
      $set: {
        random_review: `Despues de verla estoy  ${
          100 * Math.random()
        }% mas satisfecho con la vida.`,
      },
    };
    const result = await movies.updateMany(filter, updateDoc);
    console.log(`Updated ${result.modifiedCount} documents`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
