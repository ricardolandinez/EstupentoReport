import { MongoClient } from "mongodb"

const connect = () =>  new MongoClient(process.env.MONGO_CONNECTION_STRING)


const closeConnection = (db) => db.close().then(() => console.log("Conexion cerrada"))


export {connect,closeConnection};
