const mongoose = require("mongoose");

const preuLloguerSchema = new mongoose.Schema({
    ambitTerritorial: {
        type: String,
        required: true,
        enum: ["Municipi"],
        trim: true,
    },
    nomTerritori: {
        type: String,
        required: true,
        trim: true,
    },
    any: {
        type: Number,
        required: true,
        min: 1900,
    },
    periode: {
        type: String,
        required: true,
        trim: true,
    },
    habitatges: {
        type: Number,
        required: true,
        min: 0,
    },
    renda: {
        type: Number,
        required: true,
        min: 0,
    },
    tramPreus: {
        type: String,
        required: true,
        enum: ["> 600 euros/mes", "300-600 euros/mes", "<= 350 euros/mes", "> 450 i <= 600 euros/mes",
            "> 350 i <= 450 euros/mes", "> 500 i <= 650 euros/mes", "> 650 euros/mes"],
    },
});

module.exports = mongoose.model("preuLloguer", preuLloguerSchema, "preuLloguer");
