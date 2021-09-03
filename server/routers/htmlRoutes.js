const path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/user.js'));
  });
  app.get('/techs', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/techs.js'));
  });
  app.get('/master', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/master.js'));
  });
  app.get('/daily', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/daily.js'));
  });
  app.get('/ohr', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/ohr.js'));
  });
  app.get('/wh', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/wh.js'));
  });
  

};
