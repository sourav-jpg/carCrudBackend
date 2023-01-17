const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');

//API 
route.post('/api/create',controller.createCar);
route.get('/api/getCars',controller.getCars);
route.get('/api/getCarById/:id',controller.getCarById);
route.put('/api/update/:id',controller.updateCar);
route.delete('/api/delete/:id',controller.deleteCar);




module.exports= route