const mongoose = require("mongoose");

const modelPredictionSchema = new mongoose.Schema({
    nomterritori: {
        type: String,
        required: true,
        trim: true,
    },
    any: {
        type: Number,
        required: true,
        min: 1900,
    },
    habitatges: {
        type: Number,
        required: true,
        min: 0,
    },
    renda_predicha: {
        type: Number,
        required: true,
        min: 0,
    },
});

module.exports = mongoose.model("modelPrediction", modelPredictionSchema, "predictions");
