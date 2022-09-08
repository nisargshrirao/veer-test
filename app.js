const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const router = require("./routes");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/", router);

app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
}) 