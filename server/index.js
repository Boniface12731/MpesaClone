const express  =  require("express");
const app  =   express();
const {createToken} = require("./controller/token");
const tokenRoute = require("./routing/token");

app.listen(6000, () => {
    console.log("Server  is  running nicely");
});

app.get('/', (req, res)=>{
    res.send("Mpesa programming  in progress, time to  get  paid");
});