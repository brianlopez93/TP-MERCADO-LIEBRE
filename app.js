const express = require ("express");
const app = express();
const path = require ("path");


app.use(express.static("public"));

app.get("/home",(req,res) =>res.sendFile(path.join(__dirname,"views","home.html")));

app.get("/",(req,res)=> res.send("hola mundo"));
app.listen(3030,()=>console.log("servidor corriendo en el puerto 3030"));