var express = require('express');
var router = express.Router();
var request = require ('request');

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'GDA Pl(a)X' });
});
/* GET Works page. */
router.get('/lavori', function(req, res, next) {
  res.render('pages/lavori', { title: 'Lavori' });
});
/* GET Backstage page. */
router.get('/backstage', function(req, res, next) {
  res.render('pages/backstage', { title: 'Backstage' });
});
/* GET Contacts page. */
router.get('/contatti', function(req, res, next) {
  res.render('pages/contatti', { title: 'Contacts' });
});
/* GET Pl(a)X page. */
router.get('/pl(a)x', function(req, res, next) {
  res.render('pages/pl(a)x', { title: 'Pl(a)X' });
});
/* GET Pl(a)X page. */
router.get('/pl(a)x2', function(req, res, next) {
  res.render('pages/pl(a)x2', { title: 'Pl(a)X' });
});
router.get('/load', function(req, res, next) {
  res.render('pages/load', { title: 'Pl(a)X' });
});


module.exports = router;
