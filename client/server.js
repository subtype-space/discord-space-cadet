import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname, "dist")))

app.all("/{*any}", (_, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"))
})

app.listen(3006, () => {
  console.log("Server running on http://localhost:3006")
})
