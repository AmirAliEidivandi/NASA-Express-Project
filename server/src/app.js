const express = require("express");
const app = express();
const planetRouter = require('./routes/planets/planets.router');

// middleware
app.use(express.json());

// routes
app.use(planetRouter)

module.exports = app;
