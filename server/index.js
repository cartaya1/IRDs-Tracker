const express = require('express')
const app = express ()
const mongoose = require('mongoose');
const Daily = require('./models/daily');

///Database Conection
mongoose.connect("mongodb://localhost:27017/IRD_db?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
{useNewUrlParser: true}
);
app.get("/", async (req, res) => {
    console.log("looking for Data")
    })

app.listen (3001, ()=>{
    console.log('test: you are conected')
})