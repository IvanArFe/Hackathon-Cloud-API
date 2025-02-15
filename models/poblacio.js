const mongoose = require("mongoose");

const poblacioSchema = new mongoose.Schema({
    municipi: {
        type: String,
        required: true,
        trim: true,
    },
    sexe: {
        type: String,
        required: true,
        enum: ["Total", "Home", "Dona"],
        trim: true,
    },
    periode: {
        type: Number,
        required: true,
        min: 1900,
    },
    total: {
        type: Number,
        required: true,
        min: 0,
    },
    codi_postal: {
        type: Number,
        required: true,
        min: 1000,
        max: 99999,
    },
    poblacio: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model("poblacio", poblacioSchema, "poblacio");
