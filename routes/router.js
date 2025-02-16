const express = require('express');
const router = express.Router();

const preuLloguerController = require('../controllers/preuLloguerController');
const altaBaixaController = require('../controllers/altaBaixaController');
const paradesController = require('../controllers/paradesController');
const placesParkingController = require('../controllers/placesParkingController');
const poblacioController = require('../controllers/poblacioController');
const tassaAturController = require('../controllers/tassaAturController');
const habTuristicController = require('../controllers/habTuristicController');
const modelPredictionController = require('../controllers/modelPredictionController');

/* PREU LLOGUER */
router.get('/preusLloguer', preuLloguerController.getPreusLloguer);
router.get('/preuLloguer/:id', preuLloguerController.getPreuLloguer);

/* ALTA BAIXA */
router.get('/altesBaixes', altaBaixaController.getAltesBaixes);
router.get('/altaBaixa/:id', altaBaixaController.getAltaBaixa);
router.get('/altesBaixesAny/:any', altaBaixaController.getAltaBaixaByYear);
router.get('/altesBaixesMes/:mes', altaBaixaController.getAltaBaixaByMonth);
router.get('/altesBaixesTipo/:tipo', altaBaixaController.getAltaBaixaByType);

/* PARADES EMT */
router.get('/parades', paradesController.getParades);
router.get('/parada/:id', paradesController.getParada);

/* PLACES PARKING */
router.get('/placesParking', placesParkingController.getPlacesParking);
router.get('/placeParking/:id', placesParkingController.getPlaceParking);
router.get('/placesParkingTipus/:tipus', placesParkingController.getPlaceParkingByType);

/* POBLACIO */
router.get('/poblacions', poblacioController.getPoblacions);
router.get('/poblacio/:id', poblacioController.getPoblacio);
router.get('/poblacioNom/:poblacio', poblacioController.getPoblacioByPoblacio);

/* TASSA ATUR */
router.get('/tassesAtur', tassaAturController.getTassesAtur);
router.get('/tassaAtur/:id', tassaAturController.getTassaAtur);

/* HABILITACIONS TURÍSTIQUES */
router.get('/habTuristics', habTuristicController.getHabTuristics);
router.get('/habTuristic/:id', habTuristicController.getHabTuristic);
router.get('/habTuristicsAny/:any', habTuristicController.getHabTuristicByYear);
router.get('/habTuristicsMes/:mes', habTuristicController.getHabTuristicByMonth);
router.get('/habTuristicsTipus/:tipus', habTuristicController.getHabTuristicByType);

/* PREDICCIONS */
router.get('/prediccions', modelPredictionController.getModelPredictions);
router.get('/prediccio/:id', modelPredictionController.getModelPrediction);
router.get('/prediccionsAny/:any', modelPredictionController.getModelPredictionsByYear);
router.get('/prediccionsTerritori/:nomterritori', modelPredictionController.getModelPredictionsByTerritori);
router.get('/prediccionsRenda/:renda_predicha', modelPredictionController.getModelPredictionsByRenda);


module.exports = router;