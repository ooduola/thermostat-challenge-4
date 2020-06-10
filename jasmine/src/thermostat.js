class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaver = true;
    this.maxTemp = 25;
  }
  getCurrentTemp() {
    return this.temperature;
  }
  up(temperature) {
    if ((this.temperature + temperature) > this.maxTemp) {
      throw "Temperature would be too high!";
    }
    return this.temperature += temperature;
  }
  down(temperature) {
    if ((this.temperature - temperature) < 10) {
      throw "Temperature would be too low!";
    }
    return this.temperature -= temperature;
  }
  isPowerSaverOn() {
    return this.powerSaver === true;
  }
  switchPowerSaverOff() {
    this.powerSaver = false;
    this.maxTemp = 32
  }

  switchPowerSaverOn() {
    this.powerSaver = true;
  }
  
  getMaxTemp() {
    return this.maxTemp
  }

  resetTemperature() {
    this.temperature = 20
  }

  currentEnergyUsage() {
    if (this.temperature < 18 ) {
      return "low-usage"
    } else if (this.temperature < 25) {
      return "medium-usage"
    } else {
      return "high-usage"
    }
  }
}





