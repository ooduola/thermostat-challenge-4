function Thermostat() {
  this.temperature = 20;
  this.powerSaver = true;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(temperature) {
  if ((this.temperature + temperature) > 32) {
    throw "Temperature would be too high!"
  }
  return this.temperature += temperature;
};

Thermostat.prototype.down = function(temperature) {
  if ((this.temperature - temperature) < 10) {
    throw "Temperature would be too low!";
  }
  return this.temperature -= temperature;
};

Thermostat.prototype.isPowerSaverOn = function() {
  return this.powerSaver === true;
};

Thermostat.prototype.switchPowerSaverOff = function() {
  this.powerSaver = false
};