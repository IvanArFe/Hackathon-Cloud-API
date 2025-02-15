const mongoose = require("mongoose");

const tasaAturSchema = new mongoose.Schema({
    sexo: {
        type: String,
        required: true,
        enum: ["Ambos sexos", "Hombres", "Mujeres"],
        trim: true,
    },
    provincias: {
        type: String,
        required: true,
        trim: true,
    },
    tasas: {
        type: String,
        required: true,
        enum: ["Tasa de actividad", "Tasa de empleo de la población", "Tasa de paro de la población"],
        trim: true,
    },
    periodo: {
        type: String,
        required: true,
        trim: true,
    },
    tasaAtur: {
        type: Number,
        required: true,
        min: 0,
    },
});

module.exports = mongoose.model("tasaAtur", tasaAturSchema, "tasaAtur");
