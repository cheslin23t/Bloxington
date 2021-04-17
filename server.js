const express = require("express")
var app = express()

app.get("/", (req, res) => {
  res.send("Alive")
})
app.get("/dataurl", (req, res) => {
  res.send("{ \"URL\":\"" + process.env.REPLIT_DB_URL + "\" }")
})

app.listen(8080)