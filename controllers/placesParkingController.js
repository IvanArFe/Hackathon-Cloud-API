const mongoose = require('mongoose');
const placesParking = mongoose.model("plazasParking");
const { body, validationResult } = require('express-validator');

exports.getPlacesParking = async (req, res) => {
    try {
        const places = await placesParking.find();
        res.json(places);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les places de parking');
    }
};

exports.getPlaceParking = async (req, res) => {
    try {
        const place = await placesParking.findById(req.params.id);
        if (!place) {
            return res.status(404).send('Plaça de parking no trobada');
        }
        res.json(place);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir la plaça de parking');
    }
};

exports.getPlaceParkingByType = async (req, res) => {
    try {
        const places = await placesParking.find({ tipus: req.params.tipus });
        if (places.length === 0) {
            return res.status(404).send('Places de parking no trobades');
        }
        res.json(places);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les places de parking');
    }
}