const path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../server/models/user.js'));
  });
  app.get('/techs', function (req, res) {
    res.sendFile(path.join(__dirname, '../../server/models/techs.js'));
  });
  app.get('/master', function (req, res) {
    res.sendFile(path.join(__dirname, '../../server/models/master.js'));
  });
  app.get('/daily', function (req, res) {
    res.sendFile(path.join(__dirname, '../../server/models/daily.js'));
  });
  app.get('/ohr', function (req, res) {
    res.sendFile(path.join(__dirname, '../../server/models/ohr.js'));
  });
  app.get('/wh', function (req, res) {
    res.sendFile(path.join(__dirname, '../../server/models/wh.js'));
  });
  app.get("/test", async (req, res) => {
    console.log("looking for Data")
    Tech.find ({}, (err, result) => {
        if (err){
            res.send(err)
        } else {
            res.send(result)
        }
    })
})



};
