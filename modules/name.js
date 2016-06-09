var name = function(){
  var firstName = ["Bob", "Reginald", "Tshilumba", "Francisco", "Tsering", "Tsusan", "Matilda", "Hilary", "Taylor", "Donald", "Bernie"];
  var lastName = ["Ngandu", "Chen", "Patel", "Ericksson", "Flintstone", "Johnson", "Anderson", "Smith", "Lopez", "d'Agostino"];
  var fullName = firstName[getRandomInt(0, firstName.length-1)] + " " + lastName[getRandomInt(0, lastName.length-1)];
  return fullName;
};
function getRandomInt( min, max ){
    return Math.floor(Math.random() * (max - min)) + min;
  }


module.exports=name;
