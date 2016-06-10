var name = require('./name');
var scrum = require('./scrum');
var skill = require('./skill');

var createEmp = function(){
  var empInfo = {
    name: name(),
    scrum: scrum(),
    skill: skill()
  };
  return( empInfo );
};

module.exports=createEmp;
