const path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/src/pages/home.js'));
  });
  app.get('/techs', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/src/pages/Tech.js'));
  });
  app.get('/master', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/src/pages/About.js'));
  });
  app.get('/daily', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/src/pages/Request.js'));
  });
  app.get('/ohr', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/src/pages/Report.js'));
  });
  app.get('/wh', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/src/pages/Warehouse.js'));
  });
};
