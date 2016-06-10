var express = require( 'express' );
var path = require( 'path' );
var createEmp = require('../modules/createEmp');

var app = express();

app.use( express.static( 'public') );

var server = app.listen( process.env.PORT || 3000, function(){
console.log( 'serving listening on port 3000' );
});

app.get( '/', function (req, res ){

  res.sendFile( path.resolve('views/index.html'));

});

app.get( '/getEmployee', function( req, res){

  var newEmp = createEmp();
  res.send( newEmp );
  res.end();

});

console.log(createEmp());
