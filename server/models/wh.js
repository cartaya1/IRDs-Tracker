const mongoose = require('mongoose')

const whSchema = new mongoose.Schema({

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
        required: false,
    },
    RMA: {
        type: String,
        required: false,
    },
    QTY: {
        type: String,
        required: false,
    },
    TECH: {
        type: String,
        required: false,
    },
    PHONE: {
        type: String,
        required: false,
    },
    DATA: {
        type: String,
        required: true,
    },
    DATE: {
        type: String,
        required: true,
    },
    RANDOM: {
        type: String,
        required: true,
    },

})

const WH = mongoose.model('WH', whSchema, 'wh')

module.exports = WH