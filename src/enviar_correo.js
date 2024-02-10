import nodemailer from 'nodemailer';
import destinatarios from "./destinatarios.json" assert {type: "json"}


/**
 * Envía un correo electrónico utilizando nodemailer con archivos adjuntos específicos.
 * Esta función crea un transporte de correo electrónico usando las credenciales de autenticación especificadas y
 * envía un correo a los destinatarios definidos con un asunto y mensaje específicos. Los archivos adjuntos que se
 * enviarán con el correo se especifican a través del parámetro `attachments`.
 *
 * @param {Array} attachments - Un array de objetos que representa los archivos adjuntos del correo. Cada objeto debe contener las propiedades `filename` y `path`, donde `filename` es el nombre del archivo como debería aparecer en el correo y `path` es la ruta del archivo en el sistema de archivos.
 * @param {moment} since - Un objeto de moment.js que representa la fecha desde la cual se están reportando los documentos. Se utiliza para formatear el asunto del correo con el mes correspondiente al periodo del informe.
 * @returns {Promise<string>} Una promesa que se resuelve con un mensaje de éxito que incluye la respuesta del servidor de correo o se rechaza con un mensaje de error.
 * 
 * La promesa se resuelve exitosamente con el mensaje "Correo enviado: [respuesta del servidor]" si el correo se envía correctamente.
 * En caso de error al enviar el correo, la promesa se rechaza con el mensaje "Error al enviar el correo: [mensaje de error]".
 */
const sendEmail = (attachments, since) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Servicio de correo electrónico utilizado.
            auth: {
                user: process.env.SMTP_USER, // Usuario SMTP definido en las variables de entorno.
                pass: process.env.SMTP_PASSWORD // Contraseña SMTP definida en las variables de entorno.
            }
        });
        
        const mailOptions = {
            from: 'ricardo.landinez@estupendo.com.co', // Dirección de correo electrónico del remitente.
            to: destinatarios.join(","), // Direcciones de correo electrónico de los destinatarios, separadas por comas.
            subject: `Reporte documentos electrónicos Estupendo-${since.format("MMMM")}`, // Asunto del correo, incluyendo el mes del informe.
            text: 'Estimado equipo de Estupendo,\n\nEspero que este mensaje les encuentre bien.\n\nLes escribo para informarles que, a partir de ahora, recibirán un informe mensual detallando el uso de los servicios totales de Estupendo. Este correo se generará automáticamente el primer día de cada mes y cubrirá el período del mes anterior. Por ejemplo, si hoy es el 1 de enero, el informe adjunto corresponderá a todo el mes de diciembre.\n\nAdjunto a este correo, encontrarán cinco informes. Cada uno está claramente etiquetado para identificar su contenido y referencia.\n\nSi tienen algún comentario o sugerencia sobre este nuevo formato de informe, por favor, no duden en compartirlo con nosotros.\n\nSaludos cordiales,', // Cuerpo del mensaje de correo electrónico.
            attachments, // Archivos adjuntos que se enviarán con el correo.
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject(`Error al enviar el correo: ${error}`); // Rechaza la promesa con el mensaje de error.
            }
                
            resolve(`Correo enviado: ${info.response}`); // Resuelve la promesa con el mensaje de éxito.
        });
    });
};

export { sendEmail };

