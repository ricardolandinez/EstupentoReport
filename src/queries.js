/**
 * Realiza una consulta a la base de datos para obtener información sobre documentos rechazados
 * por emisores dentro de un rango de fechas.
 * @param {Date} gte - Fecha mínima (mayor o igual que).
 * @param {Date} lte - Fecha máxima (menor o igual que).
 * @returns {Array} - Un arreglo de etapas de agregación de MongoDB que representa la consulta.
 */


const query = (gte, lte) => [{
    $match: {
        estado: 2,
        created_at: {
            $gte: gte,
            $lte: lte
        }
    }
},
{
    $addFields: {
        emisorObjectId: { $toObjectId: "$emisor_id" }
    }
},
{
    $group: {
        _id: "$emisorObjectId",
        totalDocumentos_rechazado: { $sum: 1 }
    }
},
{
    $sort: {
        totalDocumentos_rechazado: -1
    }
},
{
    $lookup: {
        from: "clientes",
        localField: "_id",
        foreignField: "_id",
        as: "clienteInfo"
    }
},

{
    $project: {
        _id: 0,
        razon_social: { $arrayElemAt: ["$clienteInfo.nombre_identificacion", 0] },
        nit: { $arrayElemAt: ["$clienteInfo.identificacion", 0] },
        totalDocumentos_autorizados: "$totalDocumentos_rechazado"
    }
}]

//Busqueda documentos emision autorizados
const eventos = (gte, lte) => [{
    $match: {
        "radian.evento_pre_radian": true
    }
},
{
    $addFields: {
        nuevo_id: { $toString: "$_id" }
    }
},
{
    $lookup: {
        from: "documentos_eventos",
        let: { cliente_id: "$nuevo_id" },
        pipeline: [
            {
                $match: {
                    $expr: {
                        $and: [
                            { $eq: ["$emisor_id", "$$cliente_id"] },
                            {
                                $gte: ["$created_at", gte]
                            },
                            {
                                $lte: ["$created_at", lte]
                            }
                        ]
                    }
                }
            }
        ],
        as: "documentos_eventos"
    }
},
{
    $project: {
        identificacion: 1,
        nombre_identificacion: 1,
        totalDocumentos_eventos: {
            $size: {
                $ifNull: ["$documentos_eventos", []]
            }
        }
    }
},
{ $sort: { totalDocumentos_eventos: -1 } },
]

////Busqueda documentos Nomina autorizados
const nomina = (gte, lte) => [
    {
        $match: {
            estado: 2,
            created_at: {
                $gte: gte,
                $lte: lte
            }
        }
    },
    {
        $addFields: {
            emisorObjectId: { $toObjectId: "$empleador_id" }
        }
    },
    {
        $group: {
            _id: "$emisorObjectId",
            totalDocumentos_rechazado: { $sum: 1 }
        }
    },
    {
        $sort: {
            totalDocumentos_rechazado: -1
        }
    },
    {
        $lookup: {
            from: "clientes",
            localField: "_id",
            foreignField: "_id",
            as: "clienteInfo"
        }
    },
    {
        $project: {
            razon_social: { $arrayElemAt: ["$clienteInfo.nombre_identificacion", 0] },
            nit: { $arrayElemAt: ["$clienteInfo.identificacion", 0] },
            totalDocumentos_rechazado: "$totalDocumentos_rechazado"
        }
    }
]
////Busqueda documentos Recepcion autorizados
const recepcion = (gte, lte) => [
    {
        $match: {
            created_at: {
                $gte: gte,
                $lte: lte
            }
        }
    },
    {
        $addFields: {
            emisorObjectId: { $toObjectId: "$receptor_id" }
        }
    },
    {
        $group: {
            _id: "$emisorObjectId",
            totalDocumentos_rechazado: { $sum: 1 }
        }
    },
    {
        $sort: {
            totalDocumentos_rechazado: -1
        }
    },
    {
        $lookup: {
            from: "clientes",
            localField: "_id",
            foreignField: "_id",
            as: "clienteInfo"
        }
    },

    {
        $project: {
            razon_social: { $arrayElemAt: ["$clienteInfo.nombre_identificacion", 0] },
            nit: { $arrayElemAt: ["$clienteInfo.identificacion", 0] },
            totalDocumentos_rechazado: "$totalDocumentos_rechazado"
        }
    }
]
////Busqueda documentos emision Rechazados
const rechazados = (gte, lte) => [
    {
        $match: {
            estado: 3,
            created_at: {
                $gte: gte,
                $lte: lte
            }
        }
    },
    {
        $addFields: {
            emisorObjectId: { $toObjectId: "$emisor_id" }
        }
    },
    {
        $group: {
            _id: "$emisorObjectId",
            totalDocumentos_rechazado: { $sum: 1 }
        }
    },
    {
        $sort: {
            totalDocumentos_rechazado: -1
        }
    },
    {
        $lookup: {
            from: "clientes",
            localField: "_id",
            foreignField: "_id",
            as: "clienteInfo"
        }
    },

    {
        $project: {
            razon_social: { $arrayElemAt: ["$clienteInfo.nombre_identificacion", 0] },
            nit: { $arrayElemAt: ["$clienteInfo.identificacion", 0] },
            totalDocumentos_rechazado: "$totalDocumentos_rechazado"
        }
    }
]

export { eventos, nomina, query, recepcion, rechazados } 