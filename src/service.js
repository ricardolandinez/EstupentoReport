import { generarReporte } from "./generador.js"
import { generarAutorizados, generarEventos, generarNomina, generarRecepcion, generarRechazados } from "./callbacks.js"
import { query, eventos, nomina, recepcion, rechazados } from "./queries.js"
import { sendEmail } from "./enviar_correo.js"
import fs from "fs"
import logger from "./logger.js"
import moment from "moment"


/**
 * Genera reportes de forma asíncrona y gestiona el proceso de creación de archivos, enviando un correo electrónico con esos archivos y luego limpiando el directorio de archivos.
 * Primero verifica si el directorio "files" existe, y si no, lo crea. Luego, genera documentos y los envía por correo electrónico.
 * Después de enviar el correo, elimina el directorio "files".
 */
const generateReportes = async () => {
    // Verifica si el directorio "files" existe; si no, lo crea.
    if (!fs.existsSync("files")) fs.mkdirSync("files");

    // Genera documentos y destruye el objeto retornado para obtener los archivos y la fecha de inicio.
    const {attachments: files, since} = await generarDocumentos();

    // Envía un correo electrónico con los archivos generados y registra el resultado.
    sendEmail(files, since).then(() => {
        console.log("Correo enviado!");
        // Elimina el directorio "files" tras el envío del correo.
        fs.rmSync("files", {
            recursive: true,
            force: true
        });
        console.log("Carpeta 'files' eliminada");
    })
    .catch(console.error);
};

/**
 * Genera documentos necesarios para el reporte y los adjunta para su envío por correo electrónico.
 * Registra la generación de reportes y maneja la creación de archivos Excel basados en consultas específicas a la base de datos.
 * 
 * @returns {Promise<Object>} Promesa que resuelve a un objeto con los archivos adjuntos y la fecha desde la cual se generan los reportes.
 */
const generarDocumentos = () => new Promise(async (resolve, reject) => {
    logger.info("Generando reportes...");

    // Configura la fecha y hora actual y ajusta el locale a español.
    const now = moment();
    now.locale("es");
    const lte = now.toDate();
    const gte = now.add(-1, "month").toDate();

    // Define las consultas para los diferentes tipos de reportes.
    const queryRechazados = rechazados(gte, lte);
    const queryEventos = eventos(gte, lte);
    const queryNomina = nomina(gte, lte);
    const queryRecepcion = recepcion(gte, lte);
    const queryAutorizados = query(gte, lte);

    let data = {};
    try {
        // Genera reportes individuales y guarda los resultados en `data`.
        data.recepcion = await generarReporte(queryRecepcion, "documentos_rec");
        data.rechazados = await generarReporte(queryRechazados, "documentos");
        data.autorizados = await generarReporte(queryAutorizados, "documentos");
        data.nomina = await generarReporte(queryNomina, "documentos_nomina");
        data.eventos = await generarReporte(queryEventos, "clientes");
    
        // Genera mensajes de log para cada tipo de reporte generado.
        let msg;
        msg = await generarAutorizados(data.autorizados);
        logger.info(msg);
        msg = await generarRecepcion(data.recepcion);
        logger.info(msg);
        msg = await generarRechazados(data.rechazados);
        logger.info(msg);
        msg = await generarNomina(data.nomina);
        logger.info(msg);
        msg = await generarEventos(data.eventos);
        logger.info(msg);

        // Prepara los archivos adjuntos para el envío por correo.
        const attachments = fs.readdirSync("files")
            .map(file => `files/${file}`)
            .filter(item => item.includes(".xlsx"))
            .map(path => {
                const filename = path.split("/")[1];
                return {
                    filename,
                    path,
                };
            });
        resolve({attachments, since: now});
    } catch (error) {
        reject(error);
    }
});

export {
    generateReportes
};
