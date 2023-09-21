import dotenv from "dotenv";
import fs from "fs";
import { eventos, nomina, recepcion, rechazados, query } from "./queries.js"
import generarReporte from "./generador.js";
import { generarAutorizados, generarEventos, generarNomina, generarRecepcion, generarRechazados } from "./callbacks.js";
import sendEmail from "./enviar_correo.js";

(async () => {
    dotenv.config()
    let data
    if (!fs.existsSync("files")) fs.mkdirSync("files")
    data = await generarReporte(query, "documentos")
    generarAutorizados(data)
    data = await generarReporte(eventos, "clientes")
    generarEventos(data)
    data = await generarReporte(nomina, "documentos_nomina")
    generarNomina(data)
    data = await generarReporte(recepcion, "documentos_rec")
    generarRecepcion(data)
    data = await generarReporte(rechazados, "documentos")
    generarRechazados(data)
    sendEmail()
})()









