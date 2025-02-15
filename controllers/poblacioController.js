const mongoose = require('mongoose');
const poblacio = mongoose.model("poblacio");
const { body, validationResult } = require('express-validator');

exports.getPoblacions = async (req, res) => {
    try {
        const poblacions = await poblacio.find();
        res.json(poblacions);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les poblacions');
    }
};

exports.getPoblacio = async (req, res) => {
    try {
        const pobl = await poblacio.findById(req.params.id);
        if (pobl) {
            res.json(pobl);
        } else {
            res.status(404).send('Població no trobada');
        }
    } catch (error) {
        res.status(500).send('Error a l\'obtenir la població');
    }
};