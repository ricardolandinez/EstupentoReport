import { generarReporte } from "./generador.js"
import { generarAutorizados, generarEventos, generarNomina, generarRecepcion, generarRechazados } from "./callbacks.js"
import { query, eventos, nomina, recepcion, rechazados } from "./queries.js"
import { sendEmail } from "./enviar_correo.js"
import fs from "fs"
import logger from "./logger.js"
import moment from "moment"

const generateReportes = async () => {

    if (!fs.existsSync("files")) fs.mkdirSync("files")

    const {attachments: files, since} = await generarDocumentos()

    sendEmail(files, since).then(() => {
        console.log("Correo enviado!")
        fs.rmSync("files", {
            recursive: true,
            force: true
        })
        console.log("Carpeta files eliminada")
    })
        .catch(console.error)
}

const generarDocumentos = () => new Promise(async (resolve, reject) => {
    logger.info("Generando reportes...")
    
    const now = moment()
    now.locale("es")
    const lte = now.toDate()
    const gte = now.add(-1, "month").toDate()


    const queryRechazados = rechazados(gte, lte)
    const queryEventos = eventos(gte, lte)
    const queryNomina = nomina(gte, lte)
    const queryRecepcion = recepcion(gte, lte)
    const queryAutorizados = query(gte, lte)

    let data = {}
    try {
        data.recepcion = await generarReporte(queryRecepcion, "documentos_rec")
        data.rechazados = await generarReporte(queryRechazados, "documentos")
        data.autorizados = await generarReporte(queryAutorizados, "documentos")
        data.nomina = await generarReporte(queryNomina, "documentos_nomina")
        data.eventos = await generarReporte(queryEventos, "clientes")

        let msg
        msg = await generarAutorizados(data.autorizados)
        logger.info(msg) 
        msg = await generarRecepcion(data.recepcion)
        logger.info(msg) 
        msg = await generarRechazados(data.rechazados)
        logger.info(msg) 
        msg = await generarNomina(data.nomina)
        logger.info(msg) 
        msg = await generarEventos(data.eventos)
        logger.info(msg) 


        const attachments = fs.readdirSync("files")
            .map(file => `files/${file}`)
            .filter(item => item.includes(".xlsx"))
            .map(path => {
                const filename = path.split("/")[1]
                return {
                    filename,
                    path,
                }
            })
        resolve({attachments,since: now})
    } catch (error) {
        reject(error)
    }
})

export {
    generateReportes
}