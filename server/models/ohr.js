const mongoose = require('mongoose')

const ohrSchema = new mongoose.Schema({

TECH: {
    type: String,
    required: true,
},
LOCATION: {
    type: String,
    required: true,
},
ISS_DATE: {
    type: Date,
    required: true,
},
REC_DATE: {
    type: Date,
    required: true,
},
MODEL: {
    type: String,
    required: true,
},
SERIAL: {
    type: String,
    required: true,
    unique: true
},
CARD: {
    type: String,
    required: true,
},
AGE: {
    type: Number,
    required: true,
},

})

const OHR = mongoose.model('OHR', ohrSchema, 'ohr')

module.exports = OHR