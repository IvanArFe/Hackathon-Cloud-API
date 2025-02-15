const mongoose = require('mongoose');
const AltaBaixaTGN = mongoose.model("AltaBaixaTGN");
const { body, validationResult } = require('express-validator');

exports.getAltesBaixes = async (req, res) => {
    try {
        const altesBaixes = await AltaBaixaTGN.find();
        res.json(altesBaixes);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les altes i baixes');
    }
};

exports.getAltaBaixa = async (req, res) => {
    try {
        const altaBaixa = await AltaBaixaTGN.findById(req.params.id);
        if (!altaBaixa) {
            return res.status(404).send('Alta o baixa no trobada');
        }
        res.json(altaBaixa);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir l\'alta o baixa');
    }
};

exports.getAltaBaixaByYear = async (req, res) => {
    try {
        const altesBaixes = await AltaBaixaTGN.find({ any: req.params.any });
        res.json(altesBaixes);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les altas i baixes');
    }
};

exports.getAltaBaixaByMonth = async (req, res) => {
    try {
        const altesBaixes = await AltaBaixaTGN.find({ mes: req.params.mes });
        res.json(altesBaixes);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les altes i baixes');
    }
};

exports.getAltaBaixaByType = async (req, res) => {
    try {
        const altesBaixes = await AltaBaixaTGN.find({ tipo: req.params.tipo });
        res.json(altesBaixes);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les altes i baixes');
    }
}