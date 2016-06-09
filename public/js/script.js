console.log( 'hello world from script.js' );
$(document).ready(function(){
//ajax event
var newEmp;
var newCompanyName;
var currentEmployees = [];

$('#addEmp').on('click', function() {
  getEmployee();
  console.log("currentemployees" + currentEmployees);
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
//generate company click event
$('#generateCompany').on('click', function(){
//append company name to the dom
  newCompanyName = companyName[getRandomInt(0, companyName.length - 1)];
  projectNeeds = {
    frontEnd: getRandomInt(10, 60),
    clientSide: getRandomInt(10, 60),
    serverLogic: getRandomInt(10, 60)
    };
      if ($('.assignStaff').length == 1){
        $('.assignStaff').remove();
        generateProject();
      } else{
        generateProject();
      }
  });

function generateProject() {
  assignStaff = document.createElement( 'button' );
  assignStaff.className = 'assignStaff';

  assignStaff.innerHTML = 'Assign Staff';
  document.getElementById('nav').appendChild( assignStaff );
  // alert( companyName[getRandomInt(0, companyName.length - 1)] );

   $('#companyName').text(newCompanyName);
   $('#frontEnd').text("Front End: " + projectNeeds.frontEnd);
   $('#clientSide').text("Client Side Logic: " + projectNeeds.clientSide);
   $('#serverLogic').text("Server Side Logic: " + projectNeeds.serverLogic);
}//end project generation function

// assign staff button
$("body").on("click", ".assignStaff",function(){
  // console.log("clicked in assign Staff");

  generateStaff();
  // console.log("generateStaff = " + generateStaff());
});

var frontEnd = false;
var clientLogic = false;
var serverLogic = false;

var skillsCovered = false;

function generateStaff(){

    while (skillsCovered === false) {

      getEmployee();
      console.log("NEWEMP.SKILL = " + newEmp.skill);
      // console.log(newEmp);
      if ( newEmp.skill == "Client Side Logic" ){
        skillsCovered = true;
        console.log("skills log as true");
    }
      else {
        skillsCovered = true;
      }

      // console.log("clientLogic = true");
    // }
    //   else if ( newEmp.skill === "Front End" ){
    //   frontEnd = true;
    //
    // } else if  ( newEmp.skill === "Server Side Logic"){
    //   serverLogic = true;


    }
    console.log(skillsCovered);
  }
  console.log("currentEmployees " + currentEmployees[0]);
}
//end generate company function

function getEmployee() {
  $.ajax({
    url: 'http://localhost:3000/getEmployee',
    async: false,
    success: function( data ){
      newEmp = data;
      currentEmployees.push(newEmp);
    },
    error: function(){
      alert( 'Error accessing JSON');
    }
  });// end ajax
} // end getEmployess


}); // end document.ready
