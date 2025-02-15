const mongoose = require('mongoose');
const HabTuristic = mongoose.model("habTuristic");
const { body, validationResult } = require('express-validator');

exports.getHabTuristics = async (req, res) => {
    try {
        const habTuristics = await HabTuristic.find();
        res.json(habTuristics);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les habilitacions turístiques');
    }
};

exports.getHabTuristic = async (req, res) => {
    try {
        const habTuristic = await HabTuristic.findById(req.params.id);
        if (!habTuristic) {
            return res.status(404).send('Habilitació turística no trobada');
        }
        res.json(habTuristic);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir la habilitació turística');
    }
};

exports.getHabTuristicByYear = async (req, res) => {
    try {
        const habTuristics = await HabTuristic.find({ any: req.params.any });
        res.json(habTuristics);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les habilitacions turístiques');
    }
};

exports.getHabTuristicByMonth = async (req, res) => {
    try {
        const habTuristics = await HabTuristic.find({ mes: req.params.mes });
        res.json(habTuristics);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les habilitacions turístiques');
    }
};

exports.getHabTuristicByType = async (req, res) => {
    try {
        const habTuristics = await HabTuristic.find({ tipus: req.params.tipus });
        res.json(habTuristics);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les habilitacions turístiques');
    }
};

exports.getHabTuristicByMunicipi = async (req, res) => {
    try {
        const habTuristics = await HabTuristic.find({ municipi: req.params.municipi });
        res.json(habTuristics);
    } catch (error) {
        res.status(500).send('Error a l\'obtenir les habilitacions turístiques');
    }
}
