import { generarReporte } from "./generador.js"
import { generarAutorizados, generarEventos, generarNomina, generarRecepcion, generarRechazados } from "./callbacks.js"
import { query, eventos, nomina, recepcion, rechazados } from "./queries.js"
import { sendEmail } from "./enviar_correo.js"
import AdmZip from 'adm-zip';
import fs from "fs"

const generateReportes = async () => {
    const gte = new Date("2023-09-01T00:00:00Z")
    const lt = new Date("2023-09-30T23:59:59Z")

    const queryRechazados = rechazados(gte, lt)
    const queryEventos = eventos(gte, lt)
    const queryNomina = nomina(gte, lt)
    const queryRecepcion = recepcion(gte, lt)
    const queryAutorizados = query(gte, lt)

    if (!fs.existsSync("files")) fs.mkdirSync("files")

    let data;

    try {  
        data = await generarReporte(queryRechazados, "documentos")
        generarRechazados(data)
        data = await generarReporte(queryAutorizados, "documentos")
        generarAutorizados(data)
        data = await generarReporte(queryEventos, "clientes")
        generarEventos(data)
        data = await generarReporte(queryNomina, "documentos_nomina")
        generarNomina(data)
        data = await generarReporte(queryRecepcion, "documentos_rec")
        generarRecepcion(data)
    } catch (error) {
        console.error(`Ocurrió un error: ${error}`)
    }

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

    sendEmail(attachments).then(() => {
        console.log("Correo enviado!")
        fs.rmSync("files", {
            recursive: true,
            force: true
        })
        console.log("Carpeta files eliminada")
    }).catch(console.error)


}

export {
    generateReportes
}