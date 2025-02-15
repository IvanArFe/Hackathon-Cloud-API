const mongoose = require('mongoose');
const paradesBus = mongoose.model("paradesBus");
const { body, validationResult } = require('express-validator');

exports.getParades = async (req, res) => {
    try {
        const parades = await paradesBus.find();
        res.json(parades);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les parades');
    }
};

exports.getParada = async (req, res) => {
    try {
        const parada = await paradesBus.findById(req.params.id);
        if (!parada) {
            return res.status(404).send('Parada no trobada');
        }
        res.json(parada);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir la parada');
    }
};