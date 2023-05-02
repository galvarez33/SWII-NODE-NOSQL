// crea nuevos documentos 
const { MongoClient, ObjectId} = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);


async function run() {
    
    try {
        const db = client.db("PRUEBAS");
        const coll = db.collection("Peliculas");

        const docs = [
            { stars: 3, categories: ["Drama", "Suspense"], name: "Asesinato en casa" },
            { stars: 4, categories: ["Ciencia Ficcion","Espacio"], name: "Interestellar" },
            
        ];
        console.log("se han añadido:",docs)

        const result = await coll.insertMany(docs);
    }finally{
        await client.close();
    }
}

run().catch(console.dir);