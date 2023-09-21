import dotenv from "dotenv";
dotenv.config()

import express from "express"
import { generateReportes } from "./service.js"

// const app = express()

// app.get("/generate", async (req, res) => {
//     await generateReportes()
//     res.send("Reportes generados y enviados")
// })

// console.log("Server running at http://localhost:3000")
// app.listen(3000)

generateReportes()








