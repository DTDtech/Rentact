import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const client = new MongoClient(
    uri,
    {
        serverApi: ServerApiVersion.v1,
        // pkFactory: {
        //     createPk: () => new UUID().toBinary()
        // }
    });
const database = client.db(process.env.DB);

export default database;