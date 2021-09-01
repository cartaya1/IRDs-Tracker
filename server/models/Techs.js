const mongoose = require('mongoose')

const techSchema = new mongoose.Schema({

    SVR: {
        type: String,
        required: true,
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
        required: true,
    },
    PHONE: {
        type: String,
        required: true,
    },
    HANDHELD: {
        type: String,
        required: true,
    },
    METER: {
        type: String,
        required: true,
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
        required: true,
    },
    ATTUID: {
        type: String,
        required: true,
    },
    PHOTO: {
        type: String,
        required: true,
    },

})

const techModel = mongoose.model('techs', techSchema)

module.exports = techModel