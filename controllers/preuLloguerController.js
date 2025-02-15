const mongoose = require("mongoose");
const PreuLloguer = mongoose.model("preuLloguer");
const { body, validationResult } = require("express-validator");

exports.getPreusLloguer = async (req, res) => {
    try {
        console.log(PreuLloguer.db)
        const preusLloguer = await PreuLloguer.find();
        console.log(preusLloguer)
        res.json(preusLloguer);
    } catch (error) {
        res.status(500).send("Error a l\'obtenir els preus dels lloguers");
    }
};

exports.getPreuLloguer = async (req, res) => {
    try {
        const preuLloguer = await PreuLloguer.findById(req.params.id);
        if (!preuLloguer) {
            return res.status(404).send("Preu del lloguer no trobat");
        }
        res.json(preuLloguer);
    } catch (error) {
        res.status(500).send("Error a l\'obtenir el preu del lloguer");
    }
};

