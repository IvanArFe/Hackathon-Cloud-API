
require("dotenv").config({path: 'passwd.env'});
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;


// Conectar a MongoDB
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.error("Error de conexión a MongoDB:", err));

require('./models/preuLloguer');
require('./models/altaBaixaTgn');
require('./models/paradesEMT');
require('./models/placesParking');
require('./models/poblacio');
require('./models/tassaAtur');
require('./models/habTuristic');
require('./models/modelPrediction');

const app = require("./app");
app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
    console.log(`Express corriendo → IP ${server.address().address}`);
    console.log(`Express corriendo → PORT ${server.address().port}`);
});