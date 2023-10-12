import { generarReporte } from "./generador.js"
import { generarAutorizados, generarEventos, generarNomina, generarRecepcion, generarRechazados } from "./callbacks.js"
import { query, eventos, nomina, recepcion, rechazados } from "./queries.js"
import { sendEmail } from "./enviar_correo.js"
import fs from "fs"

const generateReportes = async () => {

    if (!fs.existsSync("files")) fs.mkdirSync("files")

    const files = await generarDocumentos()

    sendEmail(files).then(() => {
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
    const gte = new Date("2023-10-01T00:00:00-05:00")
    const lte = new Date("2023-10-31T23:59:59-05:00")

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

        await generarAutorizados(data.autorizados)
        await generarRecepcion(data.recepcion)
        await generarRechazados(data.rechazados)
        await generarNomina(data.nomina)
        await generarEventos(data.eventos)


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
        resolve(attachments)
    } catch (error) {
        reject(error)
    }
})

export {
    generateReportes
}