const express = require('express');
const route = express.Router();
const Digitalcontroller = require('../controllers/Digital');
const Quotescontroller = require('../controllers/Quotes');
const profsController = require('../controllers/profs');
const FeedsController = require('../controllers/Feeds');
const contactController = require('../controllers/contact');

route.get('/Digital', Digitalcontroller.Digital);
route.get('/Quotes', Quotescontroller.Quotes);
route.get('/profs', profsController.profs);
route.post('/feeds', FeedsController.Feeds);
route.get('/feedres', FeedsController.feedres);
route.post('/contact', contactController.contact);


module.exports = route;