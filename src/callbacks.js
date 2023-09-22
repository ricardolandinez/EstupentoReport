import ExcelJS from "exceljs";

// autorizados
const generarAutorizados = (data) => new Promise((resolve, reject) => {

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');


    worksheet.addRow(['Razón Social', 'NIT', 'Total Documentos autorizados']);


    data.forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_autorizados]);
    });


    const filename = 'files/Reporte_documentos_autorizados_emision.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte generado exitosamente en ${filename}`))
        .catch(error => reject('Error al generar el reporte:', error));
})

// eventos
const generarEventos = (data) => new Promise((resolve, reject) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.addRow(['Razón Social', 'NIT', 'Total Eventos']);

    data = data.map(document => {
        return {
            razon_social: document.nombre_identificacion,
            nit: document.identificacion,
            totalDocumentos_eventos: document.totalDocumentos_eventos
        }
    }).forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_eventos]);
    });


    const filename = 'files/Reporte_eventos.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte generado exitosamente en ${filename}`))
        .catch(error => reject('Error al generar el reporte:', error));
})

// nomina
const generarNomina = (data) => new Promise((resolve, reject) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.addRow(['Razón Social', 'NIT', 'Total Documentos Nomina']);

    data = data.map(document => {
        return {
            razon_social: document.razon_social,
            nit: document.nit,
            totalDocumentos_nomina: document.totalDocumentos_rechazado
        }
    }).forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_nomina]);
    });

    const filename = 'files/Reporte_documentos_autorizados_nomina.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte generado exitosamente en ${filename}`))
        .catch(error => reject('Error al generar el reporte:', error));
})




// recepcion
const generarRecepcion = (data) => new Promise ((resolve,reject) => 
{
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');


    worksheet.addRow(['Razón Social', 'NIT', 'Total Documentos Recepcion']);

    data = data.map(document => {
        return {
            razon_social: document.razon_social,
            nit: document.nit,
            totalDocumentos_recepcionados: document.totalDocumentos_rechazado
        }
    }).forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_recepcionados]);
    });

    const filename = 'files/Reporte_documentos_recepcionados.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte generado exitosamente en ${filename}`))
        .catch(error => reject('Error al generar el reporte:', error));

})

// rechazados
const generarRechazados = (data) => new Promise ((resolve,reject) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');


    worksheet.addRow(['Razón Social', 'NIT', 'Total Documentos Rechazados']);

    data = data.map(document => {
        return {
            razon_social: document.razon_social,
            nit: document.nit,
            totalDocumentos_rechazado: document.totalDocumentos_rechazado
        }
    }).forEach(item => {
        worksheet.addRow([item.razon_social, item.nit, item.totalDocumentos_rechazado]);
    });


    const filename = 'files/Reporte_documentos_rechazados_emision.xlsx';
    workbook.xlsx.writeFile(filename)
        .then(() => resolve(`Reporte generado exitosamente en ${filename}`))
        .catch(error => reject('Error al generar el reporte:', error));
}) 
    

export { generarAutorizados, generarEventos, generarNomina, generarRecepcion, generarRechazados };



