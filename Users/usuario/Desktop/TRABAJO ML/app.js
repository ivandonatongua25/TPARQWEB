const express = require("express");
const app =express();
const path = require("path");
const publicP = path.resolve(__dirname,"./public");
const port = process.env.PORT || 1998;
app.use(express.static(publicP));
//app.use(express.static("views"));


app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});
app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
});
app.get("/home",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.get("*",(req,res)=>{
    res.status(404).send("Not Found");
})

















































































app.listen(port,()=>console.log("Servidor corriendo en el puerto 1998"));