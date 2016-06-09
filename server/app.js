var express=require( 'express' );
var app=express();
var path=require( 'path' );
var server = app.listen( process.env.PORT || 3000, function(){
console.log( 'serving listening on port 3000' );
});

var createEmp=require('../modules/createEmp');

//make base url
app.get( '/', function (req, res ){

res.sendFile( path.resolve('views/index.html'));

});

app.get( '/getEmployee', function( req, res){
  // var testObj = {
  //   test: "testing"
  // };
  var newEmp = createEmp();
    console.log("in fucntion:" + newEmp.name );
  res.send( newEmp );
  res.end();


});

//gives permission for server to use public folder files
app.use( express.static( 'public') );


console.log( createEmp() );
