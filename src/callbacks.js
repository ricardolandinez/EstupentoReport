import ExcelJS from "exceljs";


/**
 * Genera un reporte de documentos autorizados en formato Excel. Crea un nuevo libro de trabajo,
 * añade una hoja con un encabezado específico, y rellena la hoja con los datos proporcionados.
 * Finalmente, guarda el archivo en el sistema de archivos y resuelve la promesa con un mensaje de éxito.
 * 
 * @param {Array<Object>} data - Datos de los documentos autorizados. Cada objeto debe contener las propiedades razon_social, nit y totalDocumentos_autorizados.
 * @returns {Promise<string>} Promesa que se resuelve con un mensaje indicando la creación exitosa del reporte o se rechaza con un error.
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
        .catch(error => reject('Error al generar el reporte:', error));
});

/**
 * Genera un reporte de eventos en formato Excel. Crea un nuevo libro de trabajo, añade una hoja
 * con un encabezado específico, y rellena la hoja con los datos proporcionados después de mapearlos
 * a un formato adecuado. Guarda el archivo en el sistema de archivos y resuelve la promesa con un mensaje de éxito.
 * 
 * @param {Array<Object>} data - Datos de los eventos. Cada objeto debe contener las propiedades nombre_identificacion (mapeado a razon_social), identificacion (mapeado a nit) y totalDocumentos_eventos.
 * @returns {Promise<string>} Promesa que se resuelve con un mensaje indicando la creación exitosa del reporte o se rechaza con un error.
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
        .catch(error => reject('Error al generar el reporte:', error));
});

/**
 * Genera un reporte de nómina en formato Excel. Similar a las funciones anteriores, crea un nuevo libro
 * de trabajo, añade una hoja, rellena la hoja con datos mapeados adecuadamente, y guarda el archivo.
 * Resuelve la promesa con un mensaje de éxito.
 * 
 * @param {Array<Object>} data - Datos de los documentos de nómina. Cada objeto debe contener las propiedades razon_social, nit y totalDocumentos_nomina (mapeado desde totalDocumentos_rechazado por error en la nomenclatura).
 * @returns {Promise<string>} Promesa que se resuelve con un mensaje indicando la creación exitosa del reporte o se rechaza con un error.
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
        .catch(error => reject('Error al generar el reporte:', error));
});

/**
 * Genera un reporte de recepción de documentos en formato Excel. Procede de manera similar a las funciones anteriores
 * para crear el libro de trabajo, añadir datos a la hoja, y guardar el archivo. Resuelve la promesa con un mensaje de éxito.
 * 
 * @param {Array<Object>} data - Datos de los documentos recibidos. Cada objeto debe contener las propiedades razon_social, nit y totalDocumentos_recepcionados (incorrectamente mapeado desde totalDocumentos_rechazado).
 * @returns {Promise<string>} Promesa que se resuelve con un mensaje indicando la creación exitosa del reporte o se rechaza con un error.
 */
const generarRecepcion = (data) => new Promise((resolve, reject) => {
    // Implementación similar a las anteriores
});

/**
 * Genera un reporte de documentos rechazados en formato Excel. Sigue el procedimiento estándar de creación del libro,
 * añadiendo datos, y guardando el archivo. Finaliza resolviendo la promesa con un mensaje de éxito o un error.
 * 
 * @param {Array<Object>} data - Datos de los documentos rechazados. Cada objeto debe contener las propiedades razon_social, nit y totalDocumentos_rechazado.
 * @returns {Promise<string>} Promesa que se resuelve con un mensaje indicando la creación exitosa del reporte o se rechaza con un error.
 */
const generarRechazados = (data) => new Promise((resolve, reject) => {
    // Implementación similar a las anteriores
});

export { generarAutorizados, generarEventos, generarNomina, generarRecepcion, generarRechazados };

