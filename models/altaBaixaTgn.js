const mongoose = require("mongoose");

const altaBaixaTGNSchema = new mongoose.Schema({
    any: {
        type: Number,
        required: true,
    },
    mes: {
        type: Number,
        required: true,
        min: 1,
        max: 12,
    },
    motiu: {
        type: String,
        required: true,
    },
    quantitat: {
        type: Number,
        required: true,
        min: 0,
    },
    tipo: {
        type: String,
        required: true,
        enum: ["alta", "baixa"], // Type can only be "alta" or "baixa"
    },
});

module.exports = mongoose.model("AltaBaixaTGN", altaBaixaTGNSchema, "alta_baixaTarragona");
