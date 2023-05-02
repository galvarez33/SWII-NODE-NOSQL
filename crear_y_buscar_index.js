
//Indice ayuda a hacer consultas con mayor facilidad, en este caso solo pedidmos que nos muestre el nombre de las peliculas cuyo nombre : avatar 2
//Primero creamos el indice y luego lo usamos


const { MongoClient, ObjectId} = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);





const database = client.db("PRUEBAS");
const movies = database.collection("Peliculas");

// Create an ascending index on the "title" field in the
// "movies" collection.
async function run() {
    try{
        const result = await movies.createIndex({ name: 1 });
        console.log(`Index created: ${result}`);


        const query = { name: "avatar 2" }
        const sort = { name: 1 };
        const projection = { _id: 0, name: 1 };

        const cursor = movies
        .find(query)
        .sort(sort)
        .project(projection);
        const pelicula = await cursor.toArray();
        console.log(pelicula)

        
    } finally {
        await client.close();
    }
}
run().catch(console.dir);