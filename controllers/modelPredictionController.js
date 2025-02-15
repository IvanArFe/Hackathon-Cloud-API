const mongoose = require('mongoose');
const ModelPrediction = mongoose.model("modelPrediction");
const { body, validationResult } = require('express-validator');

exports.getModelPredictions = async (req, res) => {
    try {
        const modelPredictions = await ModelPrediction.find();
        res.json(modelPredictions);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les prediccions');
    }
};

exports.getModelPrediction = async (req, res) => {
    try {
        const modelPrediction = await ModelPrediction.findById(req.params.id);
        if (!modelPrediction) {
            return res.status(404).send('Predicció no trobada');
        }
        res.json(modelPrediction);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir la predicció');
    }
};

exports.getModelPredictionsByYear = async (req, res) => {
    try {
        const modelPredictions = await ModelPrediction.find({ any: req.params.any });
        res.json(modelPredictions);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les prediccions');
    }
};

exports.getModelPredictionsByTerritori = async (req, res) => {
    try {
        const modelPredictions = await ModelPrediction.find({ nomterritori: req.params.nomterritori });
        res.json(modelPredictions);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les prediccions');
    }
};

exports.getModelPredictionsByRenda = async (req, res) => {
    try {
        const modelPredictions = await ModelPrediction.find({ renda_predicha: req.params.renda_predicha });
        res.json(modelPredictions);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les prediccions');
    }
};