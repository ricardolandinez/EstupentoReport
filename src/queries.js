


const query = [{
    $match: {
        estado: 2,
        created_at: {
            $gte: new Date("2023-09-01T00:00:00Z"),
            $lt: new Date("2023-09-30T23:59:59Z")
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

const eventos = [{
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
                                $gte: ["$created_at", new Date("2023-09-01T00:00:00Z")]
                            },
                            {
                                $lt: ["$created_at", new Date("2023-09-30T23:59:59Z")]
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

const nomina = [
    {
        $match: {
            estado: 2,
            created_at: {
                $gte: new Date("2023-09-01T00:00:00Z"),
                $lt: new Date("2023-09-30T23:59:59Z")
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

const recepcion = [
    {
        $match: {
            created_at: {
                $gte: new Date("2023-09-01T00:00:00Z"),
                $lt: new Date("2023-09-30T23:59:59Z")
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

const rechazados = [
    {
        $match: {
            estado: 3,
            created_at: {
                $gte: new Date("2023-09-01T00:00:00Z"),
                $lt: new Date("2023-09-30T23:59:59Z")
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

export {eventos,nomina,query,recepcion,rechazados} 