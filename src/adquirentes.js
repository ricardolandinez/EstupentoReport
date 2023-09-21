const ExcelJS = require('exceljs');

const jsonData =
[
    {
        "Identificacion" : "802004203",
        "Nombres" : "TECNOMOLDES S.A.S.",
        "Direccion" : "CALLE 44 N° 46 - 235",
        "Email" : "gerencia@tecnomoldes.com.co",
        "Telefono" : "0353797347"
    },
    {
        "Identificacion" : "800237412",
        "Nombres" : "FERRICENTROS S.A.S",
        "Direccion" : "AVENIDA CARACAS 74 25",
        "Email" : "hasmore1284@hotmail.com;ceci@ferricentro.com;gerencia@ferricentro.com",
        "Telefono" : "0156511212"
    },
    {
        "Identificacion" : "830049051000",
        "Nombres" : "Johnson Controls Colombia Limitada",
        "Direccion" : "CL 25 D 100 12",
        "Email" : "leidy.daza.verano@jci.com",
        "Telefono" : "5714236600"
    },
    {
        "Identificacion" : "901010523",
        "Nombres" : "SOLUCIONES ORION SUCURSAL COLOMBIA",
        "Direccion" : "Calle 99 #7A-51 of. 405",
        "Email" : "daniela.lopez@orion.global",
        "Telefono" : "8706257"
    },
    {
        "Identificacion" : "900668336000",
        "Nombres" : "OFICOMCO SAS",
        "Direccion" : "CRA 55 NO 70B 31",
        "Email" : "facturacion@ofi.com",
        "Telefono" : "4000107"
    },
    {
        "Identificacion" : "900129832",
        "Nombres" : "FUNDACION DELIRIO",
        "Direccion" : "CL 22 NORTE # 9 63",
        "Email" : "reservas@delirio.com.co",
        "Telefono" : "0323876830"
    },
    {
        "Identificacion" : "860026518",
        "Nombres" : "CHUBB SEGUROS COLOMBIA S.A",
        "Direccion" : "CRA 7 NO. 71 21 P 8",
        "Email" : "CO.FACTURACION@AON.COM",
        "Telefono" : "3266200"
    },
    {
        "Identificacion" : "860009578",
        "Nombres" : "SEGUROS DEL ESTADO S.A.",
        "Direccion" : "CRA 11 NO. 90 20 ",
        "Email" : "marbeliz.otalvaro@segurosdelestado.com",
        "Telefono" : "6346944"
    },
    {
        "Identificacion" : "860004875",
        "Nombres" : "HDI SEGUROS SA",
        "Direccion" : "HDI SEGUROS SA[CO] CARRERA 7 # 72-13 PISO 8 BOGOTA   Colombia",
        "Email" : "oscar_pinilla@generali.com.co;Ivan_wilches@generali.com.co;jonathan.santana@hdi.com.co;johanna_monsalve@generali.com.co;Angie.carvajal@Hdi.com.co;luz.padilla@payulatam.com",
        "Telefono" : "(310) 236-8227"
    },
    {
        "Identificacion" : "860002534",
        "Nombres" : "ZLS ASEGURADORA DE COLOMBIA S.A.",
        "Direccion" : "CARRERA 7 NO 76 35 PISO 7,8,9",
        "Email" : "FACTURACION_QBE@FACTUREINBOX.CO;CO.FACTURACION@AON.COM",
        "Telefono" : "3190730"
    },
    {
        "Identificacion" : "890903407",
        "Nombres" : "SEGUROS GENERALES SURAMERICANA S.A.",
        "Direccion" : "CARRERA 11 NO 93 46",
        "Email" : "galoaiza@sura.com.co;tallercucuta@fersautos.co",
        "Telefono" : "2602100 - 4355365"
    },
    {
        "Identificacion" : "890903937",
        "Nombres" : "ITAÚ CORPBANCA COLOMBIA S A",
        "Direccion" : "CARRERA 69 No. 98 A- 11 PISO 2",
        "Email" : "a.beltran@gjcomunicaciones.com",
        "Telefono" : "5818181"
    },
    {
        "Identificacion" : "860507710",
        "Nombres" : "AUTOSTOK SAS",
        "Direccion" : "calle 98a #69-25",
        "Email" : "facturaproveedor@autostok.com.co",
        "Telefono" : "(1)7423838"
    },
    {
        "Identificacion" : "860061766",
        "Nombres" : "TRANSPORTES CARAVANA SAS",
        "Direccion" : "CLL 125 BIS 20 75 INT 1 OFC 206 B",
        "Email" : "contacto@caravana.com.co",
        "Telefono" : "0317641363"
    },
    {
        "Identificacion" : "900433588",
        "Nombres" : "CENTRO DE ENSE„ANZA AUTOMOVILISTICA ABC DE FORMACION",
        "Direccion" : "ac 45 a sur # 52c 10",
        "Email" : "ceaabcdeformacion@hotmail.com",
        "Telefono" : "350 8971708"
    },
    {
        "Identificacion" : "805013591",
        "Nombres" : "ANGEL DIAGNOSTICA SAS",
        "Direccion" : "Cll 80 Nro. 11-42",
        "Email" : null,
        "Telefono" : "PBX 6080049 ext 231 o 246"
    },
    {
        "Identificacion" : "800240109",
        "Nombres" : "Seguridad QAP LTDA",
        "Direccion" : "CR 12 #98-64 OFC-601",
        "Email" : "facturacionelectronica@seguridadqap.com",
        "Telefono" : "0572563768"
    },
    {
        "Identificacion" : "800249449",
        "Nombres" : "Baker Tilly Colombia Ltda[CO]",
        "Direccion" : "Baker Tilly Colombia Ltda[CO] Carrera 51 No 80 - 58 oficina 414 Edificio Smart Office Center. BARRANQUILLA   Colombia",
        "Email" : "info@bakertillycolombia.com",
        "Telefono" : "314 777 0350"
    },
    {
        "Identificacion" : "900528696",
        "Nombres" : "International Business Partner SAS",
        "Direccion" : "Calle 93 b No 16-66 Oficina 405",
        "Email" : "javila@ibpla.com",
        "Telefono" : "3175007307"
    },
    {
        "Identificacion" : "800085526",
        "Nombres" : "VIGILANCIA ACOSTA LTDA",
        "Direccion" : "Calle 98 # 18-71 piso 3",
        "Email" : "facturacionelectronica@vigilanciaacosta.com.co",
        "Telefono" : "0572560020"
    },
    {
        "Identificacion" : "800100945",
        "Nombres" : "PEREIRANA DE TRANSPORTES SAS",
        "Direccion" : "CALLE 22 19 99",
        "Email" : "gerencia@pereiranadetransportes.com",
        "Telefono" : "0363143987"
    },
    {
        "Identificacion" : "1056804177",
        "Nombres" : "APONTE BETANCOURT MONICA NATALIA",
        "Direccion" : "CL 6 4 20",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1056804177
    },
    {
        "Identificacion" : "66809106",
        "Nombres" : "LUZ MARY HOYOS",
        "Direccion" : "CARRERA 13 38 94",
        "Email" : "papelerialaromana@gmail.com",
        "Telefono" : 3177658177
    },
    {
        "Identificacion" : "8164394",
        "Nombres" : "ANDRES FELIPE VELEZ TRUJILLO",
        "Direccion" : "CALLE 70 SUR #43A-15 OFICINA 906",
        "Email" : "invex_sa@hotmail.com",
        "Telefono" : "3122872392 3235857141"
    },
    {
        "Identificacion" : "9003534328",
        "Nombres" : "GRUPO ELITE ORGANIZACIONAL LTDA",
        "Direccion" : "carrera 13 a 34 72",
        "Email" : "jcorrecha@gelite.org",
        "Telefono" : "3134086337"
    },
    {
        "Identificacion" : "1013577821",
        "Nombres" : "APONTE MONTIEL EDER JESUS",
        "Direccion" : "CR 11 B 3 64 SUR",
        "Email" : "eder842@yahoo.es",
        "Telefono" : 3167578677
    },
    {
        "Identificacion" : "1110543657",
        "Nombres" : "SANCHEZ PORTELA FABIAN EDUARDO",
        "Direccion" : "CASTILLAS",
        "Email" : "fabian9422@hotmail.com",
        "Telefono" : 3108809789
    },
    {
        "Identificacion" : "1082870990",
        "Nombres" : "DUARTE MORA SEBASTIAN",
        "Direccion" : "CR 1 C 25 15 BRR BELLA VISTA",
        "Email" : "lucelydelahoz@hotmail.com",
        "Telefono" : 3008053490
    },
    {
        "Identificacion" : "1104872232",
        "Nombres" : "CAMARGO MARTINEZ NOEMI",
        "Direccion" : "AV 1 14 15",
        "Email" : "nocamar1996@hotmail.com",
        "Telefono" : 3008537751
    },
    {
        "Identificacion" : "16234763",
        "Nombres" : "MONTAÑO MARULANDA ANDRES FELIPE",
        "Direccion" : "VDA KERMAN PANACA HERRERIA 14",
        "Email" : "andresmontano55@hotmail.com",
        "Telefono" : 3146780990
    },
    {
        "Identificacion" : "40985206",
        "Nombres" : "URANGO ARRIETA EDITA DEL SOCORRO",
        "Direccion" : "BRR NATANIA SEXTA ETAPA ULTIMA CALLE A DEREC",
        "Email" : "andyadriana89@hotmail.com",
        "Telefono" : 3157700371
    },
    {
        "Identificacion" : "45477120",
        "Nombres" : "COVO TORRES VERONICA MARIA",
        "Direccion" : "TV 2 No.10-30",
        "Email" : "veronica.covo@gmail.com",
        "Telefono" : 3045586812
    },
    {
        "Identificacion" : "98557562",
        "Nombres" : "BETANCUR MEJIA JORGE HERNAN",
        "Direccion" : "CR 37 5 SUR 17 APTO 802 BRR POBLADO",
        "Email" : "jhbmejia@hotmail.com",
        "Telefono" : 3164040
    },
    {
        "Identificacion" : "1001879850",
        "Nombres" : "MASIEL CAROLINA CASSIANI BOLIVAR",
        "Direccion" : "CL 35 43 32",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3002480021
    },
    {
        "Identificacion" : "1042421253",
        "Nombres" : "SANDRA PATRICIA NAVARRO CAMPOS",
        "Direccion" : "CRA 19 A 9 37",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3017307707
    },
    {
        "Identificacion" : "1098684869",
        "Nombres" : "LEDNA STEFANY PEREZ GOMEZ",
        "Direccion" : "TORRE 7 ATP 102 CAFÉ 15",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3214773245
    },
    {
        "Identificacion" : "1073428313",
        "Nombres" : "LINDA LUCIA RUIZ FLOREZ",
        "Direccion" : "CL 20 B 10 03",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3219356766
    },
    {
        "Identificacion" : "1279971",
        "Nombres" : "WIDENNIS SHANETH PORTILLO BERMUDEZ",
        "Direccion" : "CR 46 88 46",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3223745550
    },
    {
        "Identificacion" : "18519787",
        "Nombres" : "JOSE DAVID CANO AGUIRRE",
        "Direccion" : "CR 50 28 92",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 4231666
    },
    {
        "Identificacion" : "1006209314",
        "Nombres" : "CRISTIAN MARTIN QUICENO HINCAPIE",
        "Direccion" : "CR 3 12 58",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3185452578
    },
    {
        "Identificacion" : "72278194",
        "Nombres" : "LUIS CARLOS GARCIA VILLORIA",
        "Direccion" : "CR 2 B 91 76",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3114132345
    },
    {
        "Identificacion" : "38474574",
        "Nombres" : "MERY LORENA RENTERIA URBANO",
        "Direccion" : "CL 3 SUR 45 35",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3183755534
    },
    {
        "Identificacion" : "38551160",
        "Nombres" : "ANGELA MARIA HUERTAS TABARES",
        "Direccion" : "CR 74ª #10ª -34",
        "Email" : null,
        "Telefono" : 3176343390
    },
    {
        "Identificacion" : "52451357",
        "Nombres" : "BEATRIZ BERMUDEZ BERMUDEZ",
        "Direccion" : "CL 67 9 12",
        "Email" : null,
        "Telefono" : 3132529266
    },
    {
        "Identificacion" : "14621092",
        "Nombres" : "CHRISTIAN SAYER RIVERA",
        "Direccion" : "CL 25 127  220",
        "Email" : null,
        "Telefono" : 3012901374
    },
    {
        "Identificacion" : "41744252",
        "Nombres" : "DORA LOPEZ RAMIREZ",
        "Direccion" : "CALLE 6B # 80G-95",
        "Email" : null,
        "Telefono" : 3173748446
    },
    {
        "Identificacion" : "31846580",
        "Nombres" : "GLORIA INES MUÑOZ DE SANTE",
        "Direccion" : "CR 15 A 17- 15",
        "Email" : null,
        "Telefono" : 3167279837
    },
    {
        "Identificacion" : "6097537",
        "Nombres" : "JESNER CAMILO SANCHEZ MANYOMA",
        "Direccion" : "CL 3 OESTE 27 42",
        "Email" : null,
        "Telefono" : 3174847555
    },
    {
        "Identificacion" : "16775896",
        "Nombres" : "JOSE ORLANDO VERA LLANOS",
        "Direccion" : "CASA CLUB 69 LA MORADA",
        "Email" : null,
        "Telefono" : 3168578611
    },
    {
        "Identificacion" : "79598595",
        "Nombres" : "NESTOR GIOVANNI GONZALEZ RUIZ",
        "Direccion" : "CL 59 8 21",
        "Email" : null,
        "Telefono" : 3136966172
    },
    {
        "Identificacion" : "1101690349",
        "Nombres" : "GONZALEZ ECHEVERRIA SILVIA TERESA",
        "Direccion" : "CR 2A 2A 4",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1101690349
    },
    {
        "Identificacion" : "74321881",
        "Nombres" : "GARCIA VEGA HUGO MAURICIO",
        "Direccion" : "CL 3 9 27",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 74321881
    },
    {
        "Identificacion" : "23324462",
        "Nombres" : "LOPEZ CASTRO ANA YOLIMA",
        "Direccion" : "CRA 5 8 125",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 23324462
    },
    {
        "Identificacion" : "1056801895",
        "Nombres" : "BETANCOURT CASTIBLANCO JORGE",
        "Direccion" : "CL 6  4 80",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1056801895
    },
    {
        "Identificacion" : "4234515",
        "Nombres" : "SANCHEZ PAMPLONA RAUL",
        "Direccion" : "CR 10 3 56",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 4234515
    },
    {
        "Identificacion" : "74321540",
        "Nombres" : "ALBARRACIN GUEVARA LUIS ALEXANDER",
        "Direccion" : "CL 2 5 58",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 74321540
    },
    {
        "Identificacion" : "40022010",
        "Nombres" : "MALAVER TORRES BLANCA INES",
        "Direccion" : "AV NORTE 51 94",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 40022010
    },
    {
        "Identificacion" : "9269449",
        "Nombres" : "JIMENEZ PEÑA FREDDY",
        "Direccion" : "CL 11 15 36 LC 2 22",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 9269449
    },
    {
        "Identificacion" : "93391521",
        "Nombres" : "BONILLA URBINA SERGIO",
        "Direccion" : "CL 53 36A 12 SUR",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 93391521
    },
    {
        "Identificacion" : "16258760",
        "Nombres" : "TANAKA FUTUMATA HECTOR JOSE",
        "Direccion" : "CLL 6  4  80",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 16258760
    },
    {
        "Identificacion" : "1056801002",
        "Nombres" : "VARGAS GIL LEIVY GERALDINE",
        "Direccion" : "CL 6 4 80",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1056801002
    },
    {
        "Identificacion" : "1010218110",
        "Nombres" : "SOLER CUELLAR LAURA CAMILA",
        "Direccion" : "KM 1 VIA UBATE - BOGOTA",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1010218110
    },
    {
        "Identificacion" : "1056798145",
        "Nombres" : "BUITRAGO ALBA CRISTINA",
        "Direccion" : "CL 6  4 80",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1056798145
    },
    {
        "Identificacion" : "86072114",
        "Nombres" : "RUEDA GUERRERO FERNANDO",
        "Direccion" : "CR 11 47 36",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 86072114
    },
    {
        "Identificacion" : "22534630",
        "Nombres" : "BOADA GONZALEZ AURA MAYRELY",
        "Direccion" : "CR 5 8  92",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 22534630
    },
    {
        "Identificacion" : "1056803124",
        "Nombres" : "SIERRA  PINILLA MAYRA ALEXANDRA",
        "Direccion" : "CR 5 7 12",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1056803124
    },
    {
        "Identificacion" : "1032459166",
        "Nombres" : "LEYDY YOHANNA CASCANTE",
        "Direccion" : "CARRERA 13 37 ",
        "Email" : null,
        "Telefono" : 3118772733
    },
    {
        "Identificacion" : "79743054",
        "Nombres" : "MANUEL ANTONIO RAMIREZ",
        "Direccion" : "CARRERA 15 CL 32 SUR 23",
        "Email" : null,
        "Telefono" : 3208399622
    },
    {
        "Identificacion" : "1000469016",
        "Nombres" : "JOHN SEBASTIAN DOMINGUEZ LONDOÑO ",
        "Direccion" : "AV CARACAS NO 47 73",
        "Email" : null,
        "Telefono" : 3864131
    },
    {
        "Identificacion" : "91224699",
        "Nombres" : "DARIO ORDOÑEZ PEDRAZA",
        "Direccion" : "CALLE 36 13 41",
        "Email" : null,
        "Telefono" : 3406812
    },
    {
        "Identificacion" : "79466581",
        "Nombres" : "ALONSO VALERO VALERO",
        "Direccion" : "CARRERA 23 NO 43 20",
        "Email" : null,
        "Telefono" : 3118123328
    },
    {
        "Identificacion" : "10568031246",
        "Nombres" : "SIERRA  PINILLA MAYRA ALEXANDRA",
        "Direccion" : "CR 5 7 12",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1056803124
    },
    {
        "Identificacion" : "52983808",
        "Nombres" : "RAMIREZ PINILLA MARIBEL",
        "Direccion" : "CL 6 SUR 16A 150",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 52983808
    },
    {
        "Identificacion" : "28237462",
        "Nombres" : "GELVEZ DE MARIÑO JOSEFA",
        "Direccion" : "CR 9 13 64",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 28237462
    },
    {
        "Identificacion" : "528056193",
        "Nombres" : "NEIRA CUELLAR CLAUDIA JENNETH",
        "Direccion" : "CL 104A 45 44 P 2",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 52805619
    },
    {
        "Identificacion" : "1129804860",
        "Nombres" : "PATERNINA ORTIZ VALERIA",
        "Direccion" : "CR 5 6 46",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1129804860
    },
    {
        "Identificacion" : "51550202",
        "Nombres" : "GOMEZ LOPEZ MARIA RITA",
        "Direccion" : "KM 2 SAN ANTONIO",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 51550202
    },
    {
        "Identificacion" : "10524000100",
        "Nombres" : "RANGEL ERIKA ALEJANDRA",
        "Direccion" : "CR 9 2 11",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1052400010
    },
    {
        "Identificacion" : "23856061",
        "Nombres" : "CAMARGO QUINTERO BLANCA CECILIA",
        "Direccion" : "AV LIBERTADORES 21 27",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 23856061
    },
    {
        "Identificacion" : "80870907",
        "Nombres" : "PANADERO SEGURA CARLOS DAVID",
        "Direccion" : "AV DE LA HISPANIDAD",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 80870907
    },
    {
        "Identificacion" : "1002330657",
        "Nombres" : "PERILLA VIASUS CAMILO ANDRES",
        "Direccion" : "Karl-Arnold-Platz 5 40474 Düsseldor",
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 1002330657
    },
    {
        "Identificacion" : "9528688",
        "Nombres" : "CHIA RINCON ADOLFO",
        "Direccion" : null,
        "Email" : "noresponder@carbonesandinos.com",
        "Telefono" : 9528688
    },
    {
        "Identificacion" : "80109137",
        "Nombres" : "JULIO FERNEY GUTIERREZ GUZMAN",
        "Direccion" : "CALLE 23A #24G-21 Sur Apto 203",
        "Email" : null,
        "Telefono" : 3142030505
    },
    {
        "Identificacion" : "74187873",
        "Nombres" : "OSCAR FABIAN PINZON PARRA",
        "Direccion" : "CALLE 14 No. 13-72 Local 1",
        "Email" : "camaleon.litografia@yahoo.com",
        "Telefono" : 3103286689
    },
    {
        "Identificacion" : "1064721744",
        "Nombres" : "LEIDY JOHANA MENA SOLANO",
        "Direccion" : "CALLE 10  #10-28",
        "Email" : "vivehogar1@hotmail.com",
        "Telefono" : 3219654289
    },
    {
        "Identificacion" : "1057572530",
        "Nombres" : "FABIAN ANDREY SALAMANCA FIGUEREDO",
        "Direccion" : null,
        "Email" : "info@3d-land.co",
        "Telefono" : 3016641288
    },
    {
        "Identificacion" : "8600404383",
        "Nombres" : "EDIFICIO ANDES ",
        "Direccion" : "Call 19 No. 4-88",
        "Email" : null,
        "Telefono" : 2828826
    },
    {
        "Identificacion" : "901234932",
        "Nombres" : "OPTOLAB SAS",
        "Direccion" : "CL 75 A 20 C 55",
        "Email" : "facturas.electronicas@optolab.co",
        "Telefono" : "5717443100"
    },
    {
        "Identificacion" : "52213977",
        "Nombres" : "OPTICA VISION EMPRESARIAL 20/20",
        "Direccion" : "TR 52C  2  03  2",
        "Email" : "opticaempresarial21@gmail.com",
        "Telefono" : "7587289"
    },
    {
        "Identificacion" : "830020599000",
        "Nombres" : "SERVIHOSP LTDA",
        "Direccion" : "AV CL 116 No.70D - 38 ED LUYAN",
        "Email" : "ventas@servihosp.com.co,tesoreria@servihosp.com.co",
        "Telefono" : "6139690"
    },
    {
        "Identificacion" : "800143273",
        "Nombres" : "MONTAJES Y CONSTRUCCIONES FERMAR SAS",
        "Direccion" : "CR 19 N 55 59",
        "Email" : "contabilidad.auxiliar1@fermarsas.com,facturacionfermarltda@gmail.com",
        "Telefono" : "0376023465"
    },
    {
        "Identificacion" : "900323811000",
        "Nombres" : "WORLEY COLOMBIA SAS",
        "Direccion" : "CR 11 B 99 25",
        "Email" : "Geraldine.cantillo@worleyparsons.com",
        "Telefono" : "0577941793"
    },
    {
        "Identificacion" : "900160765",
        "Nombres" : "NEYVA ABOGADOS ASOCIADOS SAS",
        "Direccion" : "CARRERA 7 # 127 - 48 OFICINA 1203",
        "Email" : "administracion@neyvaasociados.com",
        "Telefono" : null
    },
    {
        "Identificacion" : "900380058",
        "Nombres" : "PPD COLOMBIA S.A.S",
        "Direccion" : "CRA 28C No 85 25 Piso 2",
        "Email" : "accountsPayable.ColombiaSM@ppd.com",
        "Telefono" : "0316363084"
    },
    {
        "Identificacion" : "900719438",
        "Nombres" : "PEMSA LATINOAMERICA S.A.S",
        "Direccion" : "CR 7 79 B 15",
        "Email" : "mescobar@pemsa.com.co",
        "Telefono" : "0318237519"
    },
    {
        "Identificacion" : "900252369",
        "Nombres" : "Pluspetrol Colombia Corporation Sucursal Colombiana",
        "Direccion" : "Carrera 7 # 71-52",
        "Email" : "haguirregaray@pluspetrol.net",
        "Telefono" : "0315923777"
    },
    {
        "Identificacion" : "900336819",
        "Nombres" : "CDI Interactive S.A.S",
        "Direccion" : "Carrera 17 # 93a-41",
        "Email" : "nataly.molina@ariadnacg.com",
        "Telefono" : "0318872907"
    },
    {
        "Identificacion" : "900357604000",
        "Nombres" : "Primoris Colombia S.A.S",
        "Direccion" : "Autopista Medellin Kilometro 2 # 5 en parcelas 900 metros",
        "Email" : "nelly.gonzalez@primoris-lab.co",
        "Telefono" : "0318767226"
    },
    {
        "Identificacion" : "860063124",
        "Nombres" : "ASEISA LTDA",
        "Direccion" : "Carrera 58 No. 128 A - 79",
        "Email" : "rcalderon@aseisa.com.co",
        "Telefono" : "0316133031"
    },
    {
        "Identificacion" : "904416765",
        "Nombres" : "SERVINTSA COLOMBIA SAS",
        "Direccion" : "Av Cra 9 126 36 203",
        "Email" : "edwin.velasquez@andinas.com",
        "Telefono" : "3112259644"
    },
    {
        "Identificacion" : "901022723000",
        "Nombres" : "TECNOKLI SAS",
        "Direccion" : "CALLE 154 91 51 TORRE 6",
        "Email" : "comercial@tecnokli.com",
        "Telefono" : "3005274085"
    },
    {
        "Identificacion" : "882443034",
        "Nombres" : "sair contreras",
        "Direccion" : "hotel casino internacional local 42",
        "Email" : "chatcontre@hotmail.com",
        "Telefono" : "3204885438"
    },
    {
        "Identificacion" : "900073153",
        "Nombres" : "Lubricantes Combustibles y Partes Ltda",
        "Direccion" : "Carrera 3 8-10 subachoque cundinamarca",
        "Email" : "natispedraza@hotmail.com",
        "Telefono" : "3138325349"
    },
    {
        "Identificacion" : "723423265",
        "Nombres" : "Jamytech",
        "Direccion" : "Cra 102 No  155 B - 03 Torre 11 503",
        "Email" : "yecava1785@gmail.com",
        "Telefono" : "3015550697"
    },
    {
        "Identificacion" : "91513969",
        "Nombres" : "JGuiza Soluciones Integrales",
        "Direccion" : "Cra 90 A #4-55",
        "Email" : "contacto@jguiza.com",
        "Telefono" : "3152650950"
    },
    {
        "Identificacion" : "901255336",
        "Nombres" : "Lumu Technologies",
        "Direccion" : "calle 11009-25",
        "Email" : "asaenz@lumu.io",
        "Telefono" : "3441320"
    },
    {
        "Identificacion" : "800082708",
        "Nombres" : "Planinco SAS",
        "Direccion" : "Calle 94A No. 11A - 66",
        "Email" : "asistente@planinco.com",
        "Telefono" : "5716236651"
    },
    {
        "Identificacion" : "900127115",
        "Nombres" : "VERDE CITRON SAS",
        "Direccion" : "Calle 187 No. 46-51 Interior 10",
        "Email" : "angela.hoyos@verdecitron.com",
        "Telefono" : "3102385516"
    },
    {
        "Identificacion" : "900469243",
        "Nombres" : "vinculo sas",
        "Direccion" : "calle 75ab sur N. 52d 350",
        "Email" : "tramites@vinculo.co",
        "Telefono" : "0343227173"
    },
    {
        "Identificacion" : "900608182",
        "Nombres" : "bocatech ltda",
        "Direccion" : "calle 93 17-45",
        "Email" : "hennun@hotmail.com",
        "Telefono" : "3132639104"
    },
    {
        "Identificacion" : "386438519",
        "Nombres" : "yeni viviana ramirez salazar",
        "Direccion" : "cra 102 #15-69",
        "Email" : "yenasa@hotmail.com",
        "Telefono" : "3153604834"
    },
    {
        "Identificacion" : "900488930000",
        "Nombres" : "Districauchos JR SAS",
        "Direccion" : "Cl. 14b Sur #28-1, Bogotá",
        "Email" : "districauchosjrsas@hotmail.com",
        "Telefono" : "0155618601"
    },
    {
        "Identificacion" : "901110521",
        "Nombres" : "VIBO LC S.A.S.",
        "Direccion" : "Cra 53 D bis Nº 2 b 74",
        "Email" : "ramirezm.leonardo@vibolc.com",
        "Telefono" : "3203047792"
    },
    {
        "Identificacion" : "901083401",
        "Nombres" : "MYCOM COLOMBIA S.A.S.",
        "Direccion" : "Carrera 9 No. 28-30",
        "Email" : "tafureli@gmail.com",
        "Telefono" : "3208753630"
    },
    {
        "Identificacion" : "900643971",
        "Nombres" : "Fuentes Lopez Asociado",
        "Direccion" : "medellin",
        "Email" : "paofuentesb24@gmail.com",
        "Telefono" : "3013314612"
    },
    {
        "Identificacion" : "901145183",
        "Nombres" : "GRUAS PISTON SAS",
        "Direccion" : "carrera 2 # 12-06",
        "Email" : "dianamil1205@hotmail.com",
        "Telefono" : "3133007752"
    },
    {
        "Identificacion" : "804002481",
        "Nombres" : "Casalinda SA",
        "Direccion" : "Centro comercial cabecera cuarta etapa oficina 401",
        "Email" : "auxiliaruno.contablehg@hgconstructora.com.co",
        "Telefono" : "4333300"
    },
    {
        "Identificacion" : "900179309",
        "Nombres" : "Grupo Difusión Científica Colombia Ltda.",
        "Direccion" : "Calle 159 # 19 a - 20",
        "Email" : "dchavez@difusion.com.mx",
        "Telefono" : "3157941943"
    },
    {
        "Identificacion" : "830139702",
        "Nombres" : "UNION TEMPORAL VISE COSERVICREA LTDA",
        "Direccion" : "TV 59 B #128A-99",
        "Email" : "facturacionelectronica@coservicrea.com",
        "Telefono" : "0574431400"
    },
    {
        "Identificacion" : "119329322",
        "Nombres" : "Agencia Digital",
        "Direccion" : "Cl 36 A # 42 - 048 IN 201",
        "Email" : "juneveliom@gmail.com",
        "Telefono" : "3234943053"
    },
    {
        "Identificacion" : "800053635",
        "Nombres" : "PMR SAS",
        "Direccion" : "CARRERA 67 # 167 - 61 OFICINA 612",
        "Email" : "secretaria@pmringenieria.com",
        "Telefono" : "3054118146"
    },
    {
        "Identificacion" : "372564537",
        "Nombres" : "MARIA CECILIA TOBON SOSA",
        "Direccion" : "Calle 3N # 17E -36 URBANIZACIÓN PLAYA HERMOSA",
        "Email" : "mariatobonster@gmail.com",
        "Telefono" : "3187126916"
    },
    {
        "Identificacion" : "900606180",
        "Nombres" : "PARQUES INFANTILES JUNIOR COLOMBIA SAS",
        "Direccion" : "CLLE 23 G BIS # 103-34 INT 3",
        "Email" : "parquesinfantilesjunior@gmail.com",
        "Telefono" : null
    },
    {
        "Identificacion" : "901114412",
        "Nombres" : "Vigo Arquitectura sas",
        "Direccion" : "carrera 7c # 68A-60",
        "Email" : "villalejo_33@hotmail.com",
        "Telefono" : "3003352832"
    },
    {
        "Identificacion" : "798634200",
        "Nombres" : "XIDO Store",
        "Direccion" : "Calle 81 No 114-25 Int 14 Apt 101",
        "Email" : "doduque@gmail.com",
        "Telefono" : "3007456800"
    },
    {
        "Identificacion" : "860062112",
        "Nombres" : "Compañía de servicio de vigilancia privada COSERVICREA LTDA",
        "Direccion" : "TV 59 B #128A-59",
        "Email" : "facturacion@coservicrea.com",
        "Telefono" : "0574431400"
    },
    {
        "Identificacion" : "438795579",
        "Nombres" : "Ana María López Correa",
        "Direccion" : "Diagonal 31c # 33 a sur 130 apto 311",
        "Email" : "cabizbaja@gmail.com",
        "Telefono" : "3013525573"
    },
    {
        "Identificacion" : "9000813575",
        "Nombres" : "IVESUR COLOMBIA S A",
        "Direccion" : null,
        "Email" : "ingadjuntoiccl@ivesurcolombia.com",
        "Telefono" : null
    },
    {
        "Identificacion" : "717128887",
        "Nombres" : "Juan David Arias Aristizabal",
        "Direccion" : "CLL 158 #20-95 PIS 3 CONS 302 TORRE C FOSCAL INTERNACIONAL",
        "Email" : "jarias.md@hotmail.com",
        "Telefono" : "3183975294"
    },
    {
        "Identificacion" : "900690553",
        "Nombres" : "JORGE GUZMAN SIERRA SAS",
        "Direccion" : "calle 10 12a 08",
        "Email" : "calzadoparatodos@hotmail.com",
        "Telefono" : "3002829877"
    },
    {
        "Identificacion" : "900607743",
        "Nombres" : "amparo paz y jota sas",
        "Direccion" : "Cll 95 # 71 75, T1 Apto 2704",
        "Email" : "djmariapaz@live.com",
        "Telefono" : "3057102365"
    },
    {
        "Identificacion" : "830052642",
        "Nombres" : "ALIANZA FIDUCIARIA",
        "Direccion" : "CALLE 90 #19c-74",
        "Email" : "yolygomez1@hotmail.com",
        "Telefono" : "3188430018"
    },
    {
        "Identificacion" : "830134871",
        "Nombres" : "tecnicentro jj",
        "Direccion" : "cr 28a 67 60",
        "Email" : "tecnicentroautomotrizjj3@hotmail.com",
        "Telefono" : "3118123595"
    },
    {
        "Identificacion" : "101600785",
        "Nombres" : "edwin garcia",
        "Direccion" : "cr 8 n 129-167",
        "Email" : "edwingarcia2670@gmail.com",
        "Telefono" : "3108003406"
    },
    {
        "Identificacion" : "193378276",
        "Nombres" : "HECTOR ALIRIO FORERO QUINTERO",
        "Direccion" : "KRA. 26 No. 73 11",
        "Email" : "hectorforero@alianzaparaelprogreso.co",
        "Telefono" : "3153066180"
    },
    {
        "Identificacion" : "900226822",
        "Nombres" : "Inversiones Contreras Medina SAS",
        "Direccion" : "Calle 5 # 10-60 sur",
        "Email" : "fabiocontrerasme@gmail.com",
        "Telefono" : "3229111228"
    },
    {
        "Identificacion" : "901278891",
        "Nombres" : "RC LEGGAL S.A.S",
        "Direccion" : "AV 43 N° 51-51 T3 OF 213",
        "Email" : "rcleggalsas@hotmail.com",
        "Telefono" : "3104108103"
    },
    {
        "Identificacion" : "9000591543",
        "Nombres" : "VELOX INVESTMENT SERVICES SAS",
        "Direccion" : "CARRERA 9 # 115-06",
        "Email" : "arriendos@c21colombia.com",
        "Telefono" : " 3043282579 "
    },
    {
        "Identificacion" : "900248882",
        "Nombres" : "CLINICA PORTOAZUL S.A",
        "Direccion" : "CRA 30 CORREDOR UNIVERSITARIO # 1-850",
        "Email" : "luis.silva@clinicaportoazul.com",
        "Telefono" : "0353672700"
    },
    {
        "Identificacion" : "901045984",
        "Nombres" : "somos mayor chinos np sas",
        "Direccion" : "calle 15 # 10-50",
        "Email" : "somosmayorchinos@gmail.com",
        "Telefono" : "3144830233"
    },
    {
        "Identificacion" : "200295402",
        "Nombres" : "Herbalife",
        "Direccion" : "Calle 6a #94a-26",
        "Email" : "lopez340alex@gmail.com",
        "Telefono" : "3505362817"
    },
    {
        "Identificacion" : "900444028",
        "Nombres" : "Sinerx Lab SAS",
        "Direccion" : "Carrera 15 5N #28",
        "Email" : "fausto.astaiza@sinerxlab.com",
        "Telefono" : "3155780807"
    },
    {
        "Identificacion" : "900815409",
        "Nombres" : "MARSH COLOMBIA S.A.S.",
        "Direccion" : "Cr 21 # 31-71 Etapa 1 Casa 35 Cañaveral",
        "Email" : "giraldohasbon@gmail.com",
        "Telefono" : "3142371653"
    },
    {
        "Identificacion" : "901365373",
        "Nombres" : "Talento y belleza",
        "Direccion" : "Carrera 10 No 28 47 sur",
        "Email" : "talentoybelleza1@gmail.com",
        "Telefono" : "3102955088"
    },
    {
        "Identificacion" : "901386455",
        "Nombres" : "CI Moracol SAS",
        "Direccion" : "Cl 93 bis 20-46 apt 701",
        "Email" : "moracolsas@gmail.com",
        "Telefono" : "3102538903"
    },
    {
        "Identificacion" : "900574826",
        "Nombres" : "TECTUM ENERGY",
        "Direccion" : "Calle 74 # 11-92",
        "Email" : "luzmeryvalencia@gmail.com",
        "Telefono" : "3182339090"
    },
    {
        "Identificacion" : "900839846",
        "Nombres" : "red de negocios hbl",
        "Direccion" : "cra 51. 104 b 70",
        "Email" : "orticar@yahoo.es",
        "Telefono" : "3108736959"
    },
    {
        "Identificacion" : "900818418",
        "Nombres" : "BIENES RACINES S.A.S",
        "Direccion" : "CALLE 2DA OESTE #2-41",
        "Email" : "dracines@c21racines.com",
        "Telefono" : "3747000"
    },
    {
        "Identificacion" : "901198030000",
        "Nombres" : "NEGOCIOS INMOBILIARIOS INNOVA S.A.S",
        "Direccion" : "CALLE 116#47A-09",
        "Email" : "administracion@c21innova.com",
        "Telefono" : "7421970"
    },
    {
        "Identificacion" : "900709757",
        "Nombres" : "SOLUCIONES LEGALES INTELIGENTES SAS",
        "Direccion" : "Av jimenez  # 9-43 oficina 406",
        "Email" : "solucioneslegalesinteligentes@gmail.com",
        "Telefono" : "3212841213"
    },
    {
        "Identificacion" : "860027990",
        "Nombres" : "IRRIGACIONES LIMITADA",
        "Direccion" : "CARRERA 23 164 66",
        "Email" : "joesalba@gmail.com",
        "Telefono" : "3112016488"
    },
    {
        "Identificacion" : "900533796",
        "Nombres" : "urbanart construcciones sas",
        "Direccion" : "carrera 12 #200-14 torre 2 apt 208",
        "Email" : "urbanartconstrucciones@gmail.com",
        "Telefono" : "3118483585"
    },
    {
        "Identificacion" : "1127063160",
        "Nombres" : "JULIO CESAR AGELVIS PEREZ",
        "Direccion" : "CL 11N # 15E- 26 URB LA ESPERANZA - - -",
        "Email" : "agelvisperezj@gmail.com",
        "Telefono" : "3507889617"
    },
    {
        "Identificacion" : "121048091",
        "Nombres" : "ANTONI ABRAHAN BUSTAMANTE PEROZO",
        "Direccion" : "CARRERA 15 68 87  ALTILLO 2 APTO 504 HABITARES DE LA VICTORIA P.H. - HABITARES DE LA VICTORIA P.H.",
        "Email" : "antonibustamante95@gmail.com",
        "Telefono" : "3105629561"
    },
    {
        "Identificacion" : "914769506",
        "Nombres" : "Comercio",
        "Direccion" : "calle 36# 17-52 CC Omnicentro local 1A-33",
        "Email" : "lagranopticacolombia@hotmail.com",
        "Telefono" : "3152941010"
    },
    {
        "Identificacion" : "800156274",
        "Nombres" : "PROCEINCOL SAS",
        "Direccion" : "Carrera 19#5-05",
        "Email" : "mariaalejapd13@hotmail.com",
        "Telefono" : null
    },
    {
        "Identificacion" : "890982497",
        "Nombres" : "Parroquia Nuestra Señora del Buen Consejo",
        "Direccion" : "Calle 103 EE # 65-63. Barrio Girardot",
        "Email" : "parroquiabc@gmail.com",
        "Telefono" : "6045575441"
    },
    {
        "Identificacion" : "900935520",
        "Nombres" : "MADERAS ROYAL SAS",
        "Direccion" : "CR 22 10 49 BRR DOÑA LUZ",
        "Email" : "maderasroyalsas@gmail.com",
        "Telefono" : "3212001645"
    },
    {
        "Identificacion" : "1193552117",
        "Nombres" : "MARISOL CASTILLO ORTIZ ",
        "Direccion" : "CRA 26 80 18",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3135929630
    },
    {
        "Identificacion" : "1193405219",
        "Nombres" : "ISABEL CRISTINA RAMIREZ IDROBO ",
        "Direccion" : "CRA 41 48 33",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3186502731
    },
    {
        "Identificacion" : "1085327628",
        "Nombres" : "JOSTIN ARBEY ANGULO ORTIZ",
        "Direccion" : "CR 41 55 80",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3226289146
    },
    {
        "Identificacion" : "1073249470",
        "Nombres" : "DERLY YOMARY SILVA CAÑON",
        "Direccion" : "CL 16 B 7 52",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3213234890
    },
    {
        "Identificacion" : "1073247920",
        "Nombres" : "JEISSON ANDRES ESPINOSA RIAÑO",
        "Direccion" : "CL 16 B 7 52",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3138350917
    },
    {
        "Identificacion" : "1073525705",
        "Nombres" : "FABIAN VARONIO GARCIA RIAÑO",
        "Direccion" : "CL 16 B 7 52",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3235913525
    },
    {
        "Identificacion" : "1003690907",
        "Nombres" : "JUAN DIEGO SILVA CAÑON",
        "Direccion" : "CL 16 B 7 52",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3205773068
    },
    {
        "Identificacion" : "1076620298",
        "Nombres" : "LINA YULIANA LEON BELTRAN",
        "Direccion" : "CL 17 25 38",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3214873693
    },
    {
        "Identificacion" : "35521855",
        "Nombres" : "MARGOTH ACEVEDO MENDIETA",
        "Direccion" : "CL 17 35 25",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3203625087
    },
    {
        "Identificacion" : "1007819988",
        "Nombres" : "TANIA ISABEL SILVA CAÑON",
        "Direccion" : "CL 16 B 7 52",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3114467555
    },
    {
        "Identificacion" : "1003533879",
        "Nombres" : "YUDI TATIANA SILVA CAÑON",
        "Direccion" : "CL 16 B 7 52",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3234343635
    },
    {
        "Identificacion" : "1007862066",
        "Nombres" : "EDINSON FERNEY GUERRERO TORRES",
        "Direccion" : "CRA 8B 35 231",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3134101565
    },
    {
        "Identificacion" : "1005297471",
        "Nombres" : "YEISON STIVEN ROBLES SUAREZ",
        "Direccion" : "TORRE 6 APT 103 MADRID",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3228836627
    },
    {
        "Identificacion" : "1073164061",
        "Nombres" : "ANGIE DAMARIS MORENO CAÑON",
        "Direccion" : "CL 35 42 23",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3233456721
    },
    {
        "Identificacion" : "79655025",
        "Nombres" : "CARLOS RAUL ROJAS PALACIOS ",
        "Direccion" : "CL 24 13 06",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3219602915
    },
    {
        "Identificacion" : "1005995672",
        "Nombres" : "MICHAEL SEBASTIAN CAICEDO ALVAREZ ",
        "Direccion" : "CR 2 ESTE 16 07",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3007834284
    },
    {
        "Identificacion" : "35532209",
        "Nombres" : "SANDRA PATRICIA ORDOÑEZ BELTRAN",
        "Direccion" : "CR 8 12 35",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3114828724
    },
    {
        "Identificacion" : "1114119662",
        "Nombres" : "CARLOS ARTURO VELEZ AGUILERA",
        "Direccion" : "CR 80 2 56",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3228854224
    },
    {
        "Identificacion" : "43845730",
        "Nombres" : "LILIANA MARIA QUINTERO QUINTERO",
        "Direccion" : "CRA 50 90 A SUR 05",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3217056920
    },
    {
        "Identificacion" : "44004655",
        "Nombres" : "KAREN MARGARITA ARRIETA COGOLLO",
        "Direccion" : "CL 50 60 162",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3134183828
    },
    {
        "Identificacion" : "43264312",
        "Nombres" : "GENIS ANDREA VELEZ GONZALEZ",
        "Direccion" : "CL 82 54 C 11",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3105445267
    },
    {
        "Identificacion" : "38682995",
        "Nombres" : "BLANCA LUDIVIA PAREJA AGUIRRE",
        "Direccion" : "CR 49 56 D 19",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3219153548
    },
    {
        "Identificacion" : "72055713",
        "Nombres" : "DAYRON MIGUEL PACHECO FLORIAN",
        "Direccion" : "CR 18 7 21",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3137786381
    },
    {
        "Identificacion" : "1044609537",
        "Nombres" : "JOHANA PATRICIA RIVALDO SOLANO",
        "Direccion" : "CR 2 B 91 49",
        "Email" : "proveedores_colombia@vpcom.com",
        "Telefono" : 3007673778
    },
    {
        "Identificacion" : "31711911",
        "Nombres" : "AMOR SILVESTRE",
        "Direccion" : "CL 2 OESTE 24 B 14",
        "Email" : null,
        "Telefono" : 3105472456
    },
    {
        "Identificacion" : "16778040",
        "Nombres" : "CARLOS HERNANDEZ",
        "Direccion" : "CL 59 8 21",
        "Email" : null,
        "Telefono" : 3207681563
    },
    {
        "Identificacion" : "1061748558",
        "Nombres" : "DANIEL FELIPE PAME ANAYA",
        "Direccion" : "CL 59 8 21",
        "Email" : null,
        "Telefono" : null
    },
    {
        "Identificacion" : "1151957522",
        "Nombres" : "DIANA MARCELA GARCIA CORREA",
        "Direccion" : "CL 69 1 A 5 156",
        "Email" : null,
        "Telefono" : 3014565601
    },
    {
        "Identificacion" : "1026269425",
        "Nombres" : "DIEGO ALEXIS SASTOQUE PALACIOS",
        "Direccion" : "CL 59 8 21",
        "Email" : null,
        "Telefono" : null
    },
    {
        "Identificacion" : "19476201",
        "Nombres" : "DIEGO HERNAN GONZALEZ VERA",
        "Direccion" : "CR 166 166H 72 INT6 APTO 502",
        "Email" : null,
        "Telefono" : 3105560548
    },
    {
        "Identificacion" : "1013653176",
        "Nombres" : "FABIAN GUILLERMO ANGEL HERNANDEZ",
        "Direccion" : "TV 5 M 45 04 SUR",
        "Email" : null,
        "Telefono" : 3134146113
    },
    {
        "Identificacion" : "66990656",
        "Nombres" : "GLORIA MARIA GUTIERREZ GOMEZ",
        "Direccion" : "CL 28 86 -80",
        "Email" : null,
        "Telefono" : 3164048996
    },
    {
        "Identificacion" : "18608916",
        "Nombres" : "JORGE IVAN PARRA HERNANDEZ",
        "Direccion" : "CL 59 8 21",
        "Email" : null,
        "Telefono" : 3122866390
    },
    {
        "Identificacion" : "94430942",
        "Nombres" : "JOSE GONZALO BALCAZAR ACERO",
        "Direccion" : "CL 9 28 75",
        "Email" : null,
        "Telefono" : 3168795823
    },
    {
        "Identificacion" : "51745045",
        "Nombres" : "JULIETA LOPEZ RAMIREZ",
        "Direccion" : "CL 59 8 21",
        "Email" : null,
        "Telefono" : 3134306470
    },
    {
        "Identificacion" : "1018477782",
        "Nombres" : "MIGUEL ANGEL MORENO TAPIERO",
        "Direccion" : "CL 63 SUR 72 79",
        "Email" : null,
        "Telefono" : 3133283116
    },
    {
        "Identificacion" : "10302682",
        "Nombres" : "MARIA CAMILA GIL ESCOBAR",
        "Direccion" : "CR 1CE # 11 42",
        "Email" : null,
        "Telefono" : 3015419835
    },
    {
        "Identificacion" : "1006246974",
        "Nombres" : "BRAYAN ALEJANDRO RAMIREZ",
        "Direccion" : "CL 10 8 15",
        "Email" : null,
        "Telefono" : null
    },
    {
        "Identificacion" : "1024539769",
        "Nombres" : "PAULA ANDREA ESTEFANNY SANCHEZ DIAZ",
        "Direccion" : "CL 15 6 33",
        "Email" : null,
        "Telefono" : null
    },
    {
        "Identificacion" : "1060650725",
        "Nombres" : "LUISA FERNANDA MONTOYA TABARES",
        "Direccion" : "CL 59 8 21",
        "Email" : null,
        "Telefono" : 3116408962
    },
    {
        "Identificacion" : "52186195",
        "Nombres" : "LUZ LILIANA HERNANDEZ CUTA",
        "Direccion" : "CL 94 72 A 95",
        "Email" : null,
        "Telefono" : 3133689500
    },
    {
        "Identificacion" : "1059982926",
        "Nombres" : "DANIELLA VELASQUEZ CAICEDO",
        "Direccion" : "CR 112 44 21",
        "Email" : null,
        "Telefono" : 3182217454
    },
    {
        "Identificacion" : "67039430",
        "Nombres" : "KAREN MIRANDA PEREZ",
        "Direccion" : "CL 2 99 120",
        "Email" : null,
        "Telefono" : null
    },
    {
        "Identificacion" : "901448051",
        "Nombres" : "MENSAJERIA JUNIOR EXPRESS SAS",
        "Direccion" : "CR 41 B 26 27",
        "Email" : null,
        "Telefono" : 3126336812
    },
    {
        "Identificacion" : "38671826",
        "Nombres" : "ANGELA MORALES BONILLA",
        "Direccion" : "TV 5A 12 18",
        "Email" : null,
        "Telefono" : 3183935703
    },
    {
        "Identificacion" : "48575416",
        "Nombres" : "MATITZA VELASCO TROCHEZ",
        "Direccion" : "CR 5B SUR 6 23",
        "Email" : null,
        "Telefono" : 3135138903
    },
    {
        "Identificacion" : "1002821923",
        "Nombres" : "JUAN FELIPE PUQUE MACIAS",
        "Direccion" : "CL 59 8 21",
        "Email" : null,
        "Telefono" : null
    },
    {
        "Identificacion" : "1078369543",
        "Nombres" : "LINA GABRIELA ROMERO BENITEZ",
        "Direccion" : "CL 59 8 21",
        "Email" : null,
        "Telefono" : null
    },
    {
        "Identificacion" : "30-58447048-4",
        "Nombres" : "SENSORMATIC ARGENTINA S A",
        "Direccion" : "THAMES 139,1609 BUENOS AIRES,ARGENTINA\t",
        "Email" : " beinfoclientescol@jci.com   jerson.cabezasext@jci.com  ",
        "Telefono" : "000000"
    }
    ]

const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Reporte');

worksheet.addRow(['Identificacion', 'Nombres', 'Direccion', "Ciudad", "Email", "Telefono"]);


jsonData.forEach(item => {
    worksheet.addRow([item.Identificacion, item.Nombres, item.Direccion, item.Ciudad, item.Email, item.Telefono]);
});


const filename = 'Reporte_adquirentes_proveedores.xlsx';
workbook.xlsx.writeFile(filename)
    .then(() => {
        console.log(`Reporte generado exitosamente en ${filename}`);
    })
    .catch(error => {
        console.error('Error al generar el reporte:', error);
    });
