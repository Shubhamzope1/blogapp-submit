const express = require('express');
const route = express.Router();
const Digitalcontroller = require('../controllers/Digital');
const Quotescontroller = require('../controllers/Quotes');
const profsController = require('../controllers/profs');
const QofDayController = require('../controllers/QofDay');
const FeedsController = require('../controllers/Feeds');
const contactController = require('../controllers/contact');

route.get('/Digital', Digitalcontroller.Digital);
route.get('/Quotes', Quotescontroller.Quotes);
route.get('/Quote/:QuoteId', Quotescontroller.QuotesbyId);
route.get('/profs', profsController.profs);
route.get('/qofday', QofDayController.QofDay);
route.post('/feeds', FeedsController.Feeds);
route.post('/contact', contactController.contact);


module.exports = route;