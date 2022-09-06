const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');
const database = 'studentdetails';


async function connectToDatabase() {
    let result = await client.connect()
    let db = result.db(database);
    let collection = db.collection('student')
    let res = await collection.find().toArray();
    console.log(res);
}
connectToDatabase()

