import ExcelJS from "exceljs";


/**
 * Genera un reporte de documentos autorizados en formato Excel y lo guarda en el sistema de archivos.
 * Itera a través de la lista de datos proporcionados, creando una fila en la hoja de cálculo para cada registro.
 * 
 * @param {Array<Object>} data - Array de objetos que contienen los datos de los documentos autorizados. Cada objeto debe tener las propiedades `razon_social`, `nit`, y `totalDocumentos_autorizados`.
 * @returns {Promise<string>} Una promesa que se resuelve con un mensaje indicando el éxito de la operación y la ubicación del archivo, o se rechaza con un mensaje de error.
 */
const generarAutorizados = (data) => new Promise((resolve, reject) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.addRow(['Razón Social', 'NIT', 'Total Documentos autorizados']);

    data.forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_autorizados]);
    });

    const filename = 'files/Reporte_documentos_autorizados_emision.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte autorizados generado exitosamente en ${filename}`))
        .catch(error => reject(`Error al generar el reporte: ${error}`));
});

/**
 * Genera un reporte de eventos en formato Excel y lo guarda en el sistema de archivos.
 * Transforma y agrega los datos de los eventos a la hoja de cálculo, creando una fila por cada evento.
 * 
 * @param {Array<Object>} data - Datos de los eventos, donde cada objeto representa un evento y debe contener las propiedades `nombre_identificacion`, `identificacion`, y `totalDocumentos_eventos`.
 * @returns {Promise<string>} Una promesa que se resuelve con un mensaje indicando el éxito de la operación y la ubicación del archivo, o se rechaza con un mensaje de error.
 */
const generarEventos = (data) => new Promise((resolve, reject) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.addRow(['Razón Social', 'NIT', 'Total Eventos']);

    data.map(document => ({
        razon_social: document.nombre_identificacion,
        nit: document.identificacion,
        totalDocumentos_eventos: document.totalDocumentos_eventos
    })).forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_eventos]);
    });

    const filename = 'files/Reporte_eventos.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte eventos generado exitosamente en ${filename}`))
        .catch(error => reject(`Error al generar el reporte: ${error}`));
});

/**
 * Genera un reporte de nómina en formato Excel y lo guarda en el sistema de archivos.
 * Transforma y agrega los datos de nómina a la hoja de cálculo, creando una fila por cada registro.
 * 
 * @param {Array<Object>} data - Datos de los documentos de nómina, donde cada objeto representa un documento y debe contener las propiedades `razon_social`, `nit`, y `totalDocumentos_nomina`.
 * @returns {Promise<string>} Una promesa que se resuelve con un mensaje indicando el éxito de la operación y la ubicación del archivo, o se rechaza con un mensaje de error.
 */
const generarNomina = (data) => new Promise((resolve, reject) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.addRow(['Razón Social', 'NIT', 'Total Documentos Nomina']);

    data.map(document => ({
        razon_social: document.razon_social,
        nit: document.nit,
        totalDocumentos_nomina: document.totalDocumentos_rechazado
    })).forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_nomina]);
    });

    const filename = 'files/Reporte_documentos_autorizados_nomina.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte nómina generado exitosamente en ${filename}`))
        .catch(error => reject(`Error al generar el reporte: ${error}`));
});

/**
 * Genera un reporte de recepción de documentos en formato Excel y lo guarda en el sistema de archivos.
 * Transforma y agrega los datos de documentos recibidos a la hoja de cálculo, creando una fila por cada registro.
 * 
 * @param {Array<Object>} data - Datos de los documentos recibidos, donde cada objeto representa un documento recibido y debe contener las propiedades `razon_social`, `nit`, y `totalDocumentos_recepcionados`.
 * @returns {Promise<string>} Una promesa que se resuelve con un mensaje indicando el éxito de la operación y la ubicación del archivo, o se rechaza con un mensaje de error.
 */
const generarRecepcion = (data) => new Promise((resolve, reject) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.addRow(['Razón Social', 'NIT', 'Total Documentos Recepcion']);

    data.map(document => ({
        razon_social: document.razon_social,
        nit: document.nit,
        totalDocumentos_recepcionados: document.totalDocumentos_rechazado
    })).forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_recepcionados]);
    });

    const filename = 'files/Reporte_documentos_recepcionados.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte recepción generado exitosamente en ${filename}`))
        .catch(error => reject(`Error al generar el reporte: ${error}`));
});

/**
 * Genera un reporte de documentos rechazados en formato Excel y lo guarda en el sistema de archivos.
 * Transforma y agrega los datos de documentos rechazados a la hoja de cálculo, creando una fila por cada registro.
 * 
 * @param {Array<Object>} data - Datos de los documentos rechazados, donde cada objeto representa un documento rechazado y debe contener las propiedades `razon_social`, `nit`, y `totalDocumentos_rechazado`.
 * @returns {Promise<string>} Una promesa que se resuelve con un mensaje indicando el éxito de la operación y la ubicación del archivo, o se rechaza con un mensaje de error.
 */
const generarRechazados = (data) => new Promise((resolve, reject) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.addRow(['Razón Social', 'NIT', 'Total Documentos Rechazados']);

    data.map(document => ({
        razon_social: document.razon_social,
        nit: document.nit,
        totalDocumentos_rechazado: document.totalDocumentos_rechazado
    })).forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_rechazado]);
    });

    const filename = 'files/Reporte_documentos_rechazados_emision.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte rechazados generado exitosamente en ${filename}`))
        .catch(error => reject(`Error al generar el reporte: ${error}`));
});


export { generarAutorizados, generarEventos, generarNomina, generarRecepcion, generarRechazados };

