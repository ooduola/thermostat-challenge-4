class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMP = 10
    this.powerSavingMode = true;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
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





//   up(temperature) {
//     if ((this.temperature + temperature) > this.maxTemp) {
//       throw "Temperature would be too high!";
//     }
//     return this.temperature += temperature;
//   }
//   down(temperature) {
//     if ((this.temperature - temperature) < 10) {
//       throw "Temperature would be too low!";
//     }
//     return this.temperature -= temperature;
//   }
//   isPowerSaverOn() {
//     return this.powerSaver === true;
//   }
//   switchPowerSaverOff() {
//     this.powerSaver = false;
//     this.maxTemp = 32
//   }
//   getMaxTemp() {
//     return this.maxTemp
//   }

//   resetTemperature() {
//     this.temperature = 20
//   }

//   currentEnergyUsage() {
//     if (this.temperature < 18 ) {
//       return "low-usage"
//     } else if (this.temperature <) {
//       return "medium-usage"
//     } else {
//       return "high-usage"
//     }
//   }
// }
