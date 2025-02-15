const mongoose = require("mongoose");

const paradesEMTSchema = new mongoose.Schema({
    codi: {
        type: Number,
        required: true,
        unique: true,
    },
    nom: {
        type: String,
        required: true,
        trim: true,
    },
    adreca: {
        type: String,
        required: true,
        trim: true,
    },
    latitud: {
        type: Number,
        required: true,
        min: -90,
        max: 90,
    },
    longitud: {
        type: Number,
        required: true,
        min: -180,
        max: 180,
    },
});

module.exports = mongoose.model("paradesBus", paradesEMTSchema, "paradesBus");
