const ftoc = function(fahrenheit) {
  let celcuis = (fahrenheit - 32.0) * (5.0 / 9.0);
  return Math.round(celcuis * 10) / 10;
};

const ctof = function(celcius) {
  let fahrenheit = (celcius * (9.0 / 5.0)) + 32.0
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
