import nodemailer from 'nodemailer';


const sendEmail = (attachments) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'ricardo.landinez@estupendo.com.co',
                pass: 'Terry040804'
            }
        });
        
        const mailOptions = {
            from: 'ricardo.landinez@estupendo.com.co',
            to: 'rlandinez84@gmail.com',// Cambia el correo de destino
            //cc: 'correo.en.copia@example.com', 
            //bcc: 'correo.en.copia.oculta@example.com',
            subject: 'Reporte documentos electronicos Estupendo-SEPTIEMBRE',
            text: 'Buen día estimado equipo de Estupendo, Reciban un cordial saludo. Tal como han venido conociendo, este correo se generará al finalizar cada mes. Precisamente, en el primer día de cada mes, se enviará un reporte correspondiente al mes anterior. Esto significa que, si hoy es 1 de septiembre, este mensaje incluirá un reporte detallado de todo el mes de agosto. En el archivo comprimido(.zip) adjunto, encontrarán cinco informes, cuyo nombre identificará claramente su contenido y referencia.Aprovechamos para resaltar que si tienen algún comentario o sugerencia relacionada con este mensaje automático y preestablecido, les agradeceríamos hacérnoslo saber. Saludos cordiales',
            attachments,
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return reject(`Error al enviar el correo: ${error}`);
                
            resolve(`Correo enviado: ${info.response}`);
        });
    })
    
}

export { sendEmail } 
