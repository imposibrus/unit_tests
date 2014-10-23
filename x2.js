
var plus3 = function(num) {
  return num + 3;
};

module.exports = function(num) {
  if(num > 30) {
    return plus3(num);
  }
  if(num > 10) {
    return num;
  }
  return num * 2;
};

