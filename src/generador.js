import { closeConnection, connect } from "./db.js"


/**
 * Ejecuta una consulta de agregación en una colección específica de la base de datos y devuelve los resultados.
 * La función se conecta a la base de datos, ejecuta la consulta de agregación en la colección especificada,
 * y maneja la resolución o rechazo de la promesa basada en el éxito o fallo de la operación.
 *
 * @param {Array} query - La consulta de agregación a ejecutar en la colección. Debe ser un array de operaciones de agregación válidas para MongoDB.
 * @param {string} collection - El nombre de la colección en la base de datos sobre la cual ejecutar la consulta de agregación.
 * @returns {Promise<Array>} Una promesa que resuelve con el resultado de la consulta de agregación o rechaza con un error.
 * La promesa se resuelve con un array de documentos que coinciden con la consulta de agregación.
 * En caso de error, la promesa se rechaza con el error generado por la operación.
 */
const generarReporte = (query, collection) => {
    return new Promise((resolve, reject) => {
        const client = connect(); // Se conecta a la base de datos (la función `connect` debe estar definida en otro lugar).
        const db = client.db("stupendo"); // Accede a la base de datos llamada "stupendo".
        db.collection(collection) // Accede a la colección especificada.
            .aggregate(query) // Ejecuta la consulta de agregación.
            .toArray() // Convierte el resultado de la consulta en un array.
            .then(resolve) // Resuelve la promesa con el resultado de la consulta.
            .catch(reject) // Rechaza la promesa si ocurre un error durante la consulta.
            .finally(() => closeConnection(client)); // Cierra la conexión a la base de datos una vez completada o fallida la consulta.
    });
};

export { generarReporte };
