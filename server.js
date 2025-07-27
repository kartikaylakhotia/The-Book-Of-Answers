import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express()

import { readFileSync } from "fs";
const answers = JSON.parse(readFileSync(new URL("./book_of_answers.json", import.meta.url)));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))

app.get("/api", (req, res) => {
    res.status(200).json(answers)
})


app.listen(8080, () => console.log("Server is running on the port 8080"))