import nodemailer from 'nodemailer';


const sendEmail = (attachments, since) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });
        
        const mailOptions = {
            from: 'ricardo.landinez@estupendo.com.co',
            to: 'rlandinez84@gmail.com',// Cambia el correo de destino
            //cc: 'correo.en.copia@example.com', 
            //bcc: 'correo.en.copia.oculta@example.com',
            subject: `Reporte documentos electronicos Estupendo-${since.format("MMMM")}`,
            text: 'Estimado equipo de Estupendo,\n\nEspero que este mensaje les encuentre bien.\n\nLes escribo para informarles que, a partir de ahora, recibirán un informe mensual detallando el uso de los servicios totales de Estupendo. Este correo se generará automáticamente el primer día de cada mes y cubrirá el período del mes anterior. Por ejemplo, si hoy es el 1 de enero, el informe adjunto corresponderá a todo el mes de diciembre.\n\nAdjunto a este correo, encontrarán cinco informes. Cada uno está claramente etiquetado para identificar su contenido y referencia.\n\nSi tienen algún comentario o sugerencia sobre este nuevo formato de informe, por favor, no duden en compartirlo con nosotros.\n\nSaludos cordiales,',
            attachments,
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return reject(`Error al enviar el correo: ${error}`);
                
            resolve(`Correo enviado: ${info.response}`);
        });
    })
    
}

export { sendEmail } 
