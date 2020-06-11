class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20
    this.temperature = this.DEFAULT_TEMP
    this.MINIMUM_TEMP = 10
    this.powerSavingMode = true;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.MED_ENERGY_USAGE_LIMIT = 18
    // this.maxTemperature = 25;
  }
  getCurrentTemp() {
    return this.temperature;
  }

  up() {
    if (this.isMaximumTemperature()){
      return;
    }
    this.temperature ++
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    } else {
      this.temperature --
    }
  }

  isMinimumTemperature() {
     return this.temperature === this.MINIMUM_TEMP
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMP
  }

  currentUsage () {

    if (this.temperature < this.MED_ENERGY_USAGE_LIMIT) {
      return "low-usage"
    } 
    else if (this.temperature < this.MAX_TEMP_PSM_ON) {
      return "medium-usage"
    }
    else {
      return "high-usage"
    }
  }

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn()) {
      return this.temperature === this.MAX_TEMP_PSM_ON
    }
    else {
      return this.temperature === this.MAX_TEMP_PSM_OFF
    }
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true
  }
}



