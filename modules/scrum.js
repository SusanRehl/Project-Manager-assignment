var scrum = function(){
  return getRandomInt(1, 9);
};
function getRandomInt( min, max ){
    return Math.floor(Math.random() * (max - min)) + min;
  }

module.exports=scrum;
