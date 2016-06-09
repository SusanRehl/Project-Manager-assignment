var skill = function(){
  var empSkill = ["Front End", "Client Side Logic", "Server Side Logic"];
  return empSkill[getRandomInt(0, empSkill.length-1)];
};
function getRandomInt( min, max ){
    return Math.floor(Math.random() * (max - min)) + min;
  }

module.exports=skill;
