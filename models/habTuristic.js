const mongoose = require("mongoose");

const habTuristicSchema = new mongoose.Schema({
    comunitatsAut: {
        type: String,
        required: true,
        trim: true,
    },
    provincia: {
        type: String,
        required: true,
        trim: true,
    },
    municipi: {
        type: mongoose.Schema.Types.Mixed, // Permite valores como `NaN`
        required: true,
    },
    tipus: {
        type: String,
        required: true,
        trim: true,
    },
    periode: {
        type: String,
        required: true,
        match: /^\d{4}M\d{2}$/, // Valida formato "2024M11"
        trim: true,
    },
    total: {
        type: String,
        required: true,
        trim: true,
    },
    any: {
        type: Number,
        required: true,
        min: 1900,
    },
    mes: {
        type: Number,
        required: true,
        min: 1,
        max: 12,
    },
});

module.exports = mongoose.model("habTuristic", habTuristicSchema, "habTuristic");
