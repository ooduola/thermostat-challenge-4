function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(temperature) {
  return this.temperature += temperature;
};

Thermostat.prototype.down = function(temperature) {
  return this.temperature -= temperature;
};
