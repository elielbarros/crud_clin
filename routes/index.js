const express = require('express');

const homeContoller = require('../controllers/homeController');
const addClientController = require('../controllers/addClientController');
const editClientController = require('../controllers/editClientController');
const removeClientController = require('../controllers/removeClientController');

const router = express.Router();

router.get('/', homeContoller.page);
router.get('/addClient', addClientController.page);

router.post('/editClientAction', editClientController.editAction);
router.post('/addClientAction', addClientController.addAction);
router.get('/removeClient/:id', removeClientController.removeAction);
router.post('/search', homeContoller.search);

module.exports=router;