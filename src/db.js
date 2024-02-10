import { MongoClient } from "mongodb"

/**
 * Crea una nueva instancia de MongoClient y establece una conexión a la base de datos MongoDB utilizando la URI de conexión.
 * La URI de conexión es obtenida de las variables de entorno del sistema. Esta función es utilizada para iniciar
 * una conexión a la base de datos antes de realizar operaciones como consultas o actualizaciones.
 *
 * @returns {MongoClient} Una instancia de MongoClient conectada a la base de datos especificada en la URI de conexión.
 */
const connect = () =>  new MongoClient(process.env.MONGO_CONNECTION_URI);

/**
 * Cierra una conexión activa a la base de datos MongoDB.
 * Esta función recibe una instancia de MongoClient y utiliza el método `close` para terminar la conexión.
 * Se puede usar opcionalmente para imprimir un mensaje en la consola una vez que la conexión se haya cerrado correctamente,
 * aunque esta funcionalidad está comentada en el ejemplo.
 *
 * @param {MongoClient} db La instancia de MongoClient que representa la conexión a la base de datos que se desea cerrar.
 */
const closeConnection = (db) => db.close();
// .then(() => console.log("Conexion cerrada"));

export { connect, closeConnection };

