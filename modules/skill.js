var getRandomInt = require('./getRandom');

var skill = function(){
  var empSkill = ["Front End", "Client Side Logic", "Server Side Logic"];
  return empSkill[getRandomInt(0, empSkill.length)];
};

module.exports=skill;
