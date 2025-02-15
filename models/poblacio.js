const mongoose = require("mongoose");

const poblacioSchema = new mongoose.Schema({
    nomZona: {
        type: String,
        required: true,
        trim: true,
    },
    edad: {
        type: Number,
        required: true,
        min: 0,
    },
    sexe: {
        type: String,
        required: true,
        enum: ["D", "H"], // D = Dona, H = Home
    },
    nacionalitat: {
        type: String,
        required: true,
        trim: true,
    },
    quantitat: {
        type: Number,
        required: true,
        min: 0,
    },
});

module.exports = mongoose.model("poblacio", poblacioSchema, "poblacio");
