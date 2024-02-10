import winston from "winston"

/**
 * Define un formato personalizado para los mensajes de log usando winston.
 * Este formato incluye la fecha y hora del log, el nivel de severidad y el mensaje de log.
 *
 * @param {Object} logInfo Información del log que incluye el nivel de severidad, el mensaje y la marca de tiempo.
 * @param {string} logInfo.level Nivel de severidad del log.
 * @param {string} logInfo.message Mensaje del log.
 * @param {string} logInfo.timestamp Marca de tiempo del log.
 * @returns {string} Mensaje de log formateado.
 */
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

/**
 * Crea un logger con configuración personalizada usando winston.
 * Este logger registra información con una estructura definida y es capaz de escribir los logs tanto en la consola como en un archivo.
 * Se configura con un nivel de log 'info' por defecto, lo que significa que capturará logs de nivel 'info' y más críticos (como 'error').
 * Utiliza un formato combinado que incluye una marca de tiempo y el formato personalizado definido anteriormente.
 * Además, se añade metadata por defecto para identificar el servicio.
 */
const logger = winston.createLogger({
    level: "info", // Nivel de severidad mínimo para los logs.
    format: winston.format.combine(
        winston.format.timestamp(), // Añade una marca de tiempo a cada mensaje de log.
        customFormat // Utiliza el formato personalizado definido arriba para el mensaje de log.
    ),
    defaultMeta: {
        service: "Reporting Estupendo" // Metadata por defecto añadida a todos los logs.
    },
    transports: [
        new winston.transports.Console(), // Permite la salida de logs en la consola.
        new winston.transports.File({
            filename: "logs/app.log" // Configura un archivo para guardar los logs.
        })
    ]
});

export default logger;
