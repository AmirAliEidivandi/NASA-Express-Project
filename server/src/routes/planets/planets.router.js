const planetRouter = require('express').Router();
const { getAllPlanets } = require('./planets.controller');

planetRouter.get('/planets', getAllPlanets);

module.exports = planetRouter;