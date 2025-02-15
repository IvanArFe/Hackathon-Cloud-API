const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Para permitir CORS
const helmet = require("helmet"); // Para mayor seguridad
const morgan = require("morgan"); // Para logging
const routes = require("./routes/router"); // Importa las rutas

// Configuración básica
const app = express();


// Middleware para parsear JSON y seguridad
app.use(express.json());
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Habilitar CORS
app.use(helmet()); // Agregar encabezados de seguridad
app.use(morgan("dev")); // Logging de las peticiones

// Rutas
app.use('/', routes)// Prefijo '/api' para todas las rutas

module.exports = app; // Exportar para pruebas o usos adicionales
