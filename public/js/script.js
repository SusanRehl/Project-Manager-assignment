// declare global variables
var newEmp;
var newCompanyName;
var currentEmployees = [];
// declare array for random companyName generation
var companyName = [ 'Target', 'Best Buy', 'General Mills', 'Medtronic',
'Dairy Queen','3M', 'EcoLab', 'Uponor', 'Lynx', 'The Wild', 'University of Minnesota' ];
// placeholder object for project SCRUM needs
var projectNeeds = {
  frontEnd: '',
  clientSide: '',
  serverLogic: ''
};
// object to hold total team skill sums
var totalSkills = {
  frontEnd: 0,
  clientSide: 0,
  serverLogic: 0
};
// object to hold weeks calcuation
var weekNeeds = {
  frontEnd: 0,
  clientSide: 0,
  serverLogic: 0
};

$(document).ready(function(){

  $('#assignStaff').hide();
  // click event to trigger new project
  $('#generateCompany').on('click', function(){
    newCompanyName = companyName[getRandomInt(0, companyName.length)];
    projectNeeds = {
      frontEnd: getRandomInt(10, 60),
      clientSide: getRandomInt(10, 60),
      serverLogic: getRandomInt(10, 60)
    };
    // display assign staff after new project
    $('#assignStaff').show();
    // call gerenateProject
    generateProject();

  });
  // event handler to trigger assign staff function
  $("#assignStaff").on("click", function(){
    $('#addEmp').show();
    generateStaff();
    // create element to display needed weeks after staff has been assigned
    $('#weekCounter').remove();
    var weekEl = document.createElement('p');
    weekEl.id = "weekCounter";
    weekEl.innerHTML = 'Weeks to complete project: ' + getMostWeeks();
    document.getElementById('project').appendChild( weekEl );
  });

  $('#addEmp').hide();
  // event handler for adding a single addition employee
  $('#addEmp').on('click', function() {
    getEmployee();
    // element creation to append new employee to DOM
    var newDiv = document.createElement('div');
    newDiv.className = 'col-md-3 employee';
    newDiv.id = "employee";
    document.getElementById('employeeContainer').appendChild(newDiv);
    console.log(currentEmployees[newEmp.name]);
    newDiv.innerHTML = 'Name: ' + newEmp.name + '<br>Skill: ' + newEmp.skill + '<br>SCRUM: ' + newEmp.scrum;
    // update the needed weeks with new employee skills added in
    $('#weekCounter').text('Weeks to complete project: ' + getMostWeeks());
    console.log("currentemployees" + currentEmployees);
    console.log(newEmp);
  });

});

$('#project').hide();
// generate a new project
function generateProject() {
  // if generate project button is hit wiht current project, currentEmployees
  // will be set to empty for new project
  currentEmployees = [];
  // total skills object is cleared
  totalSkills.frontEnd = 0;
  totalSkills.clientSide = 0;
  totalSkills.serverLogic = 0;
  // weeks counter element is cleared
  $('#weekCounter').text('');
  // employee display on DOM is cleared
  $('#employeeContainer').empty();
  // show project and populate if no project is pre existing
  $('#project').show();
  $('#companyName').text(newCompanyName);
  $('#frontEnd').text("Front End: " + projectNeeds.frontEnd);
  $('#clientSide').text("Client Side Logic: " + projectNeeds.clientSide);
  $('#serverLogic').text("Server Side Logic: " + projectNeeds.serverLogic);
}
// set switch variables for logic check on while loop
var frontEnd = false;
var clientLogic = false;
var serverLogic = false;

var skillsArray = [];

function generateStaff(){
  // check skills covered until each skill is represented
  while (frontEnd === false || clientLogic === false || serverLogic === false) {
    getEmployee();
    if (newEmp.skill == "Front End") {

      frontEnd = true;
    } else if (newEmp.skill == "Client Side Logic") {
      clientLogic = true;
    } else if (newEmp.skill == "Server Side Logic") {
      serverLogic = true;
    }
    // console.log(newEmp);

    // build new DOOM element for each employee
    var newDiv = document.createElement('div');
    newDiv.className = 'col-md-3 employee';
    newDiv.id = "employee";
    document.getElementById('employeeContainer').appendChild(newDiv);
    console.log(currentEmployees[newEmp.name]);
    newDiv.innerHTML = 'Name: ' + newEmp.name + '<br>Skill: ' + newEmp.skill + '<br>SCRUM: ' + newEmp.scrum;


    // $('#employee' + i).append('<p>Name: ' + newEmp.name + '</p>');
    // $('#employee' + i).append('<p>Skill: ' + newEmp.skill + '</p>');

  }
  // // var newDiv = document.createElement('div');
  // // newDiv.className = 'col-md-3 employee';
  // // document.getElementById('employeeContainer').appendChild(newDiv);
  // // console.log(currentEmployees[currentEmployees.length - 1]);
  // // $('.employee').append('<h4>Name: ' + currentEmployees[currentEmployees.length -1].name + '</h4>');
  // // $("#employeeContainer").appendChild(currentEmployees);
}
// helper function for producing random numbers
function getRandomInt( min, max ){
    return Math.floor(Math.random() * (max - min)) + min;
}
//  sum up all employee skills for weeks needed calculation
function totalSkills() {
  for (var i = 0; i < currentEmployees.length; i++) {
    skillsArray.push(currentEmployees[i].skill);
  }
}
// helper function to estimate needed weeks for each skill
function getWeeks() {
  weekNeeds.frontEnd = projectNeeds.frontEnd / totalSkills.frontEnd;
  weekNeeds.clientSide = projectNeeds.clientSide / totalSkills.clientSide;
  weekNeeds.clientSide = projectNeeds.clientSide / totalSkills.clientSide;
}
// funciton to find the most weeks needed to populate the DOM with that info
function getMostWeeks() {
  if (weekNeeds.frontEnd > weekNeeds.clientSide) {
    if ( weekNeeds.serverLogic > weekNeeds.frontEnd) {
      return Math.ceil(weekNeeds.serverLogic);
    } else {
      return Math.ceil(weekNeeds.frontEnd);
    }
  } else {
    if ( weekNeeds.serverLogic > weekNeeds.clientSide) {
      return Math.ceil(weekNeeds.serverLogic);
    } else {
      return Math.ceil(weekNeeds.clientSide);
    }
  }
}
// ajax call to get an employee
function getEmployee() {
  $.ajax({
    url: 'http://localhost:3000/getEmployee',
    async: false,
    success: function( data ){
      // console.log('ajax ran');
      newEmp = data;
      if (newEmp.skill == "Front End") {
        totalSkills.frontEnd += newEmp.scrum;
      } else if (newEmp.skill == "Client Side Logic") {
        totalSkills.clientSide += newEmp.scrum;
      } else if (newEmp.skill == "Server Side Logic") {
        totalSkills.serverLogic += newEmp.scrum;
      }
      currentEmployees.push(newEmp);
      // for (var i = 0; i < currentEmployees.length; i++) {
      //   console.log(currentEmployees[i].name);
      // }

      // console.log('employees' + currentEmployees);
       getWeeks();
      console.log(totalSkills);
      console.log(weekNeeds);
      console.log(getMostWeeks());
    },
    error: function(){
      alert( 'Error accessing JSON');
    }
  });
}
