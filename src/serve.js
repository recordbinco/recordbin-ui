// node app.js
const express = require("express")
const serveStatic = require("serve-static")
const app = express()
const path = require("path")
const PORT = 3000

const staticServer = serveStatic(path.join(__dirname, "/../dist/"))
app.use(staticServer)
app.listen(PORT, () => console.log(`Server listening http://localhost:${PORT}`))
