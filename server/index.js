const express = require('express')
const app = express ()
const mongoose = require('mongoose');
const techModel = require('./models/Techs');

///Database Conection
mongoose.connect("mongodb://localhost:27017/IRD-db?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
{useNewUrlParser: true}
);

app.get("/data", async (req, res) => {
    techModel.find ({}, (err, result) => {
        if (err){
            res.send(err)
        } else {
            res.send(result)
        }
    })
})



app.listen (3001, ()=>{
    console.log('test: you are conected')
})
