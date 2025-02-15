const mongoose = require("mongoose");

const placesParkingSchema = new mongoose.Schema({
    latitu: {
        type: Number,
        required: true,
        min: -90,
        max: 90,
    },
    long: {
        type: Number,
        required: true,
        min: -180,
        max: 180,
    },
    tipus: {
        type: String,
        required: true,
        enum: ["Motocicletes", "Cotxes", "Exclusives Discapacitats", "Càrrega/Descàrrega", "Bicis/Patinets",
        "Exclusives d'ús particular", "Exclusives 1 vehicle/entitat"],
        trim: true,
    },
    places: {
        type: Number,
        required: true,
        min: 0,
    },
});

module.exports = mongoose.model("plazasParking", placesParkingSchema, "plazasParking");
