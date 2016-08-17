var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();

app.set('port', (process.env.PORT || 5000));

// Configuration
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/',function(req,res){
		res.status(200).json({success:true});
});

app.listen(app.get('port'), function () {
  console.log('App listening on port ' + app.get('port'));
});
