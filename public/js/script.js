console.log( 'hello world from script.js' );
$(document).ready(function(){
  $.ajax({
    url: 'http://localhost:3000/getEmployee',
    dataType: 'json',
    success: function( data ){

    },
    error: function(){
      alert( 'Error accessing JSON');
    }
  });

var companyName = [ 'Target', 'Best Buy', 'General Mills', 'Medtronic', 'Dairy Queen',
  '3M', 'EcoLab', 'Uponor', 'Lynx', 'The Wild', 'University of Minnesota' ];

function getRandomInt( min, max ){
    return Math.floor(Math.random() * (max - min)) + min;
  }
var projectNeeds = {
  frontEnd: '',
  clientSide: '',
  serverLogic: ''
};

console.log(projectNeeds);

$('#generateCompany').on('click', function(){
//append company name to the dom
var newCompanyName = companyName[getRandomInt(0, companyName.length - 1)];
projectNeeds = {
  frontEnd: getRandomInt(10, 60),
  clientSide: getRandomInt(10, 60),
  serverLogic: getRandomInt(10, 60)
};

var assignStaff;
if ($('.assignStaff').length){

  $('.assignStaff').remove();

 assignStaff = document.createElement( 'button' );
  assignStaff.className = 'assignStaff';
  console.log("In IF");
  assignStaff.innerHTML = 'Assign Staff';
  document.getElementById('nav').appendChild( assignStaff );
  // alert( companyName[getRandomInt(0, companyName.length - 1)] );

  $('#companyName').text(newCompanyName);
  $('#frontEnd').text("Front End: " + projectNeeds.frontEnd);
  $('#clientSide').text("Client Side Logic: " + projectNeeds.clientSide);
  $('#serverLogic').text("Server Side Logic: " + projectNeeds.serverLogic);


} else{
  console.log("in else");
   assignStaff = document.createElement( 'button' );
  assignStaff.className = 'assignStaff';

  assignStaff.innerHTML = 'Assign Staff';
  document.getElementById('nav').appendChild( assignStaff );
  // alert( companyName[getRandomInt(0, companyName.length - 1)] );

  $('#companyName').text(newCompanyName);
  $('#frontEnd').text("Front End: " + projectNeeds.frontEnd);
  $('#clientSide').text("Client Side Logic: " + projectNeeds.clientSide);
  $('#serverLogic').text("Server Side Logic: " + projectNeeds.serverLogic);
}

});



});



console.log(projectNeeds);
console.log(projectNeeds.frontEnd);
