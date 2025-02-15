const mongoose = require('mongoose');
const tassaAtur = mongoose.model("tasaAtur");
const { body, validationResult } = require('express-validator');

exports.getTassesAtur = async (req, res) => {
    try {
        const tassa = await tassaAtur.find();
        res.json(tassa);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les tasses d\'atur');
    }
};

exports.getTassaAtur = async (req, res) => {
    try {
        const tassa = await tassaAtur.findById(req.params.id);
        if (tassa) {
            res.json(tassa);
        } else {
            res.status(404).send('Tassa d\'atur no trobada');
        }
    } catch (error) {
        res.status(500).send('Error a l\'obtenir la tassa d\'atur');
    }
};
