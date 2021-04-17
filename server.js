const express = require("express")
var app = express()
app.use(express.json());
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.send("Alive")
})
app.post("/dataurl", (req, res) => {
  if (req.body.secret == process.env.SECRET) {

    res.send("{ \"URL\":\"" + process.env.REPLIT_DB_URL + "\" }")
  }
  else{
    res.sendStatus(403)
  }
})


app.listen(8080)