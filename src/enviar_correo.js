

import nodemailer from 'nodemailer';
import AdmZip from 'adm-zip';
import fs from 'fs';
import { resolve } from 'path';
import { rejects } from 'assert';

function sendEmail() {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'ricardo.landinez@estupendo.com.co',
                pass: 'Lotto0804'
            }
        });

        const zip = new AdmZip();
        const zipFilePath = './files/Reporte_Estupendo.zip'; // Cambiar la ruta y nombre del archivo .zip

        const filesToCompress = [
            './files/Reporte_eventos.xlsx', // Cambiar las rutas a los documentos que deseas comprimir
            './files/Reporte_documentos_autorizados_emision.xlsx',
            './files/Reporte_documentos_autorizados_nomina.xlsx',
            './files/Reporte_documentos_rechazados_emision.xlsx',
            './files/Reporte_documentos_recepcionados.xlsx'
        ];

        filesToCompress.forEach(filePath => {
            if (fs.existsSync(filePath)) {
                const fileContent = fs.readFileSync(filePath);
                const fileName = filePath.split('/').pop(); // Obtener el nombre del archivo
                zip.addFile(fileName, fileContent); // Agregar archivo al ZIP
            } else {
                console.error(`Archivo no encontrado: ${filePath}`);
            }
        });

        zip.writeZip(zipFilePath);

        const mailOptions = {
            from: 'ricardo.landinez@estupendo.com.co',
            to: 'mreyeswilson@gmail.com,rlandinez84@gmail.com',// Cambia el correo de destino
            //cc: 'correo.en.copia@example.com', 
            //bcc: 'correo.en.copia.oculta@example.com',
            subject: 'Reporte documentos electronicos Estupendo',
            text: 'Buen día estimado equipo de Estupendo,Reciban un cordial saludo.Tal como han venido conociendo, este correo se generará al finalizar cada mes.Precisamente, en el primer día de cada mes, se enviará un reporte correspondiente al mes anterior.Esto significa que, si hoy es 1 de septiembre, este mensaje incluirá un reporte detallado de todo el mes de agosto.En el archivo comprimido(.zip) adjunto, encontrarán cinco informes, cuyo nombre identificará claramente su contenido y referencia.Aprovechamos para resaltar que si tienen algún comentario o sugerencia relacionada con este mensaje automático y preestablecido, les agradeceríamos hacérnoslo saber. Saludos cordiales',
            attachments: [
                {
                    filename: 'Reporte_electronico.zip',
                    path: zipFilePath
                }
            ]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo:', error);
            } else {
                console.info('Correo enviado:', info.response);
            }
        });
    

}




export default sendEmail
