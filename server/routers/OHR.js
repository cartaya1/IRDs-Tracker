const express = require('express')
const app = express ()
const mongoose = require('mongoose');
const OHR = require('./models/ohr');

///Database Conection
mongoose.connect("mongodb://localhost:27017/IRD_db?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
{useNewUrlParser: true}
);

app.get("/ohr", async (req, res) => {
    console.log("looking for Data")
    OHR.find ({}, (err, result) => {
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