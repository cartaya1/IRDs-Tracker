const mongoose = require('mongoose')

const dailySchema = new mongoose.Schema({

LOCATION: {
    type: String,
    required: true,
},
TYPE: {
    type: String,
    required: true,
},
SERIAL: {
    type: String,
    required: true,
},
CARD: {
    type: String,
    required: true,
},
MODEL: {
    type: String,
    required: true,
},
MATERIAL: {
    type: String,
    required: true,
},
RMA: {
    type: String,
    required: true,
},
QTY: {
    type: String,
    required: true,
},
TECH: {
    type: String,
    required: true,
},
PHONE: {
    type: String,
    required: true,
},
DATA: {
    type: String,
    required: true,
},
DATE: {
    type: Date,
    required: true,
},
RANDOM: {
    type: String,
    required: true,
    unique: true
},

})

const Daily = mongoose.model('Daily', dailySchema, 'daily')

module.exports = Daily