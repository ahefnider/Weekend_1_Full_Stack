var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/mu';




router.post('/', function (req, res) {
  var employee = req.body;
console.log(employee);
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('INSERT INTO employees (firstname, lastname, empid, jobtitle, salary) ' +
                  'VALUES ($1, $2, $3, $4, $5)',
                   [employee.firstname, employee.lastname, employee.empid, employee.jobtitle, employee.salary],
                 function (err, result) {
                   done();

                   if (err) {
                     res.sendStatus(500);
                     return;
                   }

                   res.sendStatus(201);
                 });
  });
});

module.exports = router;
