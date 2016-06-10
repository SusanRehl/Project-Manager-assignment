var newEmp;
var newCompanyName;
var currentEmployees = [];

var companyName = [ 'Target', 'Best Buy', 'General Mills', 'Medtronic',
'Dairy Queen','3M', 'EcoLab', 'Uponor', 'Lynx', 'The Wild', 'University of Minnesota' ];

var projectNeeds = {
  frontEnd: '',
  clientSide: '',
  serverLogic: ''
};

var totalSkills = {
  frontEnd: 0,
  clientSide: 0,
  serverLogic: 0
};

var weekNeeds = {
  frontEnd: 0,
  clientSide: 0,
  serverLogic: 0
};

$(document).ready(function(){

  $('#assignStaff').hide();

  $('#generateCompany').on('click', function(){
    newCompanyName = companyName[getRandomInt(0, companyName.length)];
    projectNeeds = {
      frontEnd: getRandomInt(10, 60),
      clientSide: getRandomInt(10, 60),
      serverLogic: getRandomInt(10, 60)
    };
    $('#assignStaff').show();

    generateProject();

  });

  $("#assignStaff").on("click", function(){
    $('#addEmp').show();
    generateStaff();
    var weekEl = document.createElement('p');
    weekEl.id = "weekCounter";
    weekEl.innerHTML = 'Weeks to complete project: ' + getMostWeeks();
    document.getElementById('project').appendChild( weekEl );
  });

  $('#addEmp').hide();

  $('#addEmp').on('click', function() {
    getEmployee();
    var newDiv = document.createElement('div');
    newDiv.className = 'col-md-3 employee';
    newDiv.id = 'page-container';
    document.getElementById('page-container').appendChild(newDiv);

    $('.employee').append('<h4>Name: ' + newEmp.name + '</h4>');
    $('.employee').append('<p>Skill: ' + newEmp.skill + '</p>');
    $('.employee').append('<p>Scrum: ' + newEmp.scrum + '</p>');

    $('#weekCounter').text('Weeks to complete project: ' + getMostWeeks());
    console.log("currentemployees" + currentEmployees);
    console.log(newEmp);
  });

});

$('#project').hide();

function generateProject() {
  currentEmployees = [];

  totalSkills.frontEnd = 0;
  totalSkills.clientSide = 0;
  totalSkills.serverLogic = 0;

  $('#weekCounter').text('');

  $('#employeeContainer').empty();

  $('#project').show();
  $('#companyName').text(newCompanyName);
  $('#frontEnd').text("Front End: " + projectNeeds.frontEnd);
  $('#clientSide').text("Client Side Logic: " + projectNeeds.clientSide);
  $('#serverLogic').text("Server Side Logic: " + projectNeeds.serverLogic);
}

var frontEnd = false;
var clientLogic = false;
var serverLogic = false;

var skillsCovered = (serverLogic) && (clientLogic) && (frontEnd);
var skillsArray = [];

function generateStaff(){
  getEmployee();
  console.log(newEmp);
  var newDiv = document.createElement('div');
  newDiv.className = 'col-md-3 employee';
  document.getElementById('employeeContainer').appendChild(newDiv);

  $('.employee').append('<h4>Name: ' + newEmp.name + '</h4>');
  $('.employee').append('<p>Skill: ' + newEmp.skill + '</p>');
  $('.employee').append('<p>Scrum: ' + newEmp.scrum + '</p>');


  for (var i = 0; i < currentEmployees.length; i++) {
    skillsArray.push(currentEmployees[i].skill);
  }

  // console.log(skillsArray);

  if ( skillsArray.indexOf('Front End') >= 0 ) {
    if ( skillsArray.indexOf("Client Side Logic") >= 0) {
      if ( skillsArray.indexOf("Server Side Logic")  >= 0) {
        console.log('succes');
        return;
      } else {
        generateStaff();
      }
    } else {
      generateStaff();
    }
  } else {
    generateStaff();
  }
}

function getRandomInt( min, max ){
    return Math.floor(Math.random() * (max - min)) + min;
}

function totalSkills() {
  for (var i = 0; i < currentEmployees.length; i++) {
    skillsArray.push(currentEmployees[i].skill);
  }
}

function getWeeks() {
  weekNeeds.frontEnd = projectNeeds.frontEnd / totalSkills.frontEnd;
  weekNeeds.clientSide = projectNeeds.clientSide / totalSkills.clientSide;
  weekNeeds.clientSide = projectNeeds.clientSide / totalSkills.clientSide;
}

function getMostWeeks() {
  if (weekNeeds.frontEnd > weekNeeds.clientSide) {
    if ( weekNeeds.serverLogic > weekNeeds.frontEnd) {
      return weekNeeds.serverLogic;
    } else {
      return weekNeeds.frontEnd;
    }
  } else {
    if ( weekNeeds.serverLogic > weekNeeds.clientSide) {
      return weekNeeds.serverLogic;
    } else {
      return weekNeeds.clientSide;
    }
  }
}

function getEmployee() {
  $.ajax({
    url: 'http://localhost:3000/getEmployee',
    async: false,
    success: function( data ){
      newEmp = data;
      if (newEmp.skill == "Front End") {
        totalSkills.frontEnd += newEmp.scrum;
      } else if (newEmp.skill == "Client Side Logic") {
        totalSkills.clientSide += newEmp.scrum;
      } else if (newEmp.skill == "Server Side Logic") {
        totalSkills.serverLogic += newEmp.scrum;
      }
      currentEmployees.push(newEmp);
      console.log('employees' + currentEmployees);
      console.log(totalSkills);
      getWeeks();
      console.log(weekNeeds);
      console.log(getMostWeeks());
    },
    error: function(){
      alert( 'Error accessing JSON');
    }
  });
}
