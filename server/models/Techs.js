const mongoose = require('mongoose')

const techSchema = new mongoose.Schema({

    SVR: {
        type: String,
        required: false,
    },
    TEAM: {
        type: String,
        required: true,
    },
    SUP: {
        type: String,
        required: true,
    },
    EMPNUM: {
        type: String,
        required: true,
    },
    TECH: {
        type: String,
        required: true,
        unique: true        
    },
    LAST: {
        type: String,
        required: true,
    },
    FIRST: {
        type: String,
        required: true,
    },
    SIZE: {
        type: String,
        required: false,
    },
    PHONE: {
        type: String,
        required: true,
    },
    HANDHELD: {
        type: String,
        required: false,
    },
    METER: {
        type: String,
        required: false,
    },
    DAY_OFF: {
        type: String,
        required: true,
    },
    NAME: {
        type: String,
        required: true,
    },
    SUNDAY: {
        type: Boolean,
        required: true,
    },
    PICKUP: {
        type: String,
        required: true,
    },
    EMAIL: {
        type: String,
        required: true,
    },
    SIM: {
        type: String,
        required: true,
    },
    DIV: {
        type: String,
        required: false,
    },
    ATTUID: {
        type: String,
        required: false,
        unique: true
    },
    PHOTO: {
        type: String,
        required: false,
    },

})

const Tech = mongoose.model('Tech', techSchema, 'techs')

module.exports = Tech