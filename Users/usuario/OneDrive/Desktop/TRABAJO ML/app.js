const express = require("express");
const app =express();
const path = require("path");
const publicP = path.resolve(__dirname,"./public");
app.use(express.static(publicP));
//app.use(express.static("views"));


app.get("/",(req,res)=>{
    res.send(" MERCADO LIBRE");
});
app.get("/products",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/homecopia.html"));
});
app.get("/home",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.get("*",(req,res)=>{
    res.status(404).send("Not Found");
})

















































































app.listen(1998,()=>console.log("Servidor corriendo en el puerto 1998"));