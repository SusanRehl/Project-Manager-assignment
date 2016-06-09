var express=require( 'express' );
var app=express();
var path=require( 'path' );
var server = app.listen( process.env.PORT || 3000, function(){

console.log( 'serving listening on port 3000' );

});

//make base url
app.get( '/', function (req, res ){

res.sendFile( path.resolve('views/index.html'));

});

app.get( '/getEmployee', function( req, res ){

  var testObject = {
    test: "hello from testObject"  
  };
  res.send( testObject );


});

//gives permission for server to use public folder files
app.use( express.static( 'public') );

var createEmp=require('../modules/createEmp');
console.log( createEmp() );
