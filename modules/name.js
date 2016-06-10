var getRandomInt = require('./getRandom');

var name = function(){
  var firstName = ["Bob", "Reginald", "Tshilumba", "Francisco", "Tsering", "Tsusan", "Matilda", "Hilary", "Taylor", "Donald", "Bernie"];
  var lastName = ["Ngandu", "Chen", "Patel", "Ericksson", "Flintstone", "Johnson", "Anderson", "Smith", "Lopez", "d'Agostino"];
  var fullName = firstName[getRandomInt(0, firstName.length)] + " " + lastName[getRandomInt(0, lastName.length)];
  return fullName;
};

module.exports=name;
