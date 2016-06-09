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

$('#generateCompany').on('click', function(){
//append company name to the dom
var assignStaff;
if ($('.assignStaff').length){

  $('.assignStaff').remove();

 assignStaff = document.createElement( 'button' );
  assignStaff.className = 'assignStaff';
  console.log("In IF");
  assignStaff.innerHTML = 'Assign Staff';
  document.body.appendChild( assignStaff );
  alert( companyName[getRandomInt(0, companyName.length - 1)] );

} else{
  console.log("in else");
   assignStaff = document.createElement( 'button' );
  assignStaff.className = 'assignStaff';

  assignStaff.innerHTML = 'Assign Staff';
  document.body.appendChild( assignStaff );
  alert( companyName[getRandomInt(0, companyName.length - 1)] );

}

});



});

var companyName = [ 'Target', 'Best Buy', 'General Mills', 'Medtronic', 'Dairy Queen',
'3M', 'EcoLab', 'Uponor', 'Lynx', 'The Wild', 'University of Minnesota' ];

function getRandomInt( min, max ){
  return Math.floor(Math.random() * (max - min)) + min;
}
