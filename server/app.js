var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var employees = require('./routes/employees');
var add = require('./routes/addemployee');
var deleted = require('./routes/delete');

app.set('port', 3000);

// mount middleware
app.use(bodyParser.urlencoded( {extended: true} ));

app.use('/addemployee', add);

app.use('/delete', deleted);


app.use('/employees', employees);

app.get('/*', function(req, res) {
  console.log('request params', req.params);
  var file = req.params[0] || 'views/Day_5_Weekend_Challenge.html';
  res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
