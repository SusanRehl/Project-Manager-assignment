var name=require('./name');
var scrum=require('./scrum');
var skill=require('./skill');




var createEmp = function(){

  var newEmp = ' ..this is from createEmp module' + name() + scrum() + skill();
  return( newEmp );
};

module.exports=createEmp;
