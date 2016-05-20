var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/mu';

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('DELETE FROM employees WHERE empid = $1',
                  [id], function (err, result) {
                      done();

                      if (err) {
                                      console.log(err);
                                      res.sendStatus(500);
                                      return;
                                    }

                                    res.sendStatus(200);
    });
  });
});

module.exports = router;
