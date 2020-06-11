describe("thermostat", function() {

  beforeEach(function() {
  thermostat = new Thermostat();
  });

  it ("thermostat should start at 20 degrees", function(){
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it ("should increase temperature with an up function", function(){
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it ("should decrease temperature with a down function", function(){
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it ('the minimum temperature is 10 degrees', function (){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  })

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

});




//   it ("should decrease the temperature with a down function", function(){
//     thermostat.down(1);
//     expect(thermostat.getCurrentTemp()).toEqual(19);
//   });

//   it('has a minimum of 10 degrees', function() {
//     for (var i = 0; i < 11; i++) {
//       thermostat.down();
//     }
//     expect(thermostat.getCurrentTemp()).toEqual(10);
//   });
  


//   it ("switching powerSaver off sets the maxTemp to 32", function() {
//     thermostat.switchPowerSaverOff();
//     expect(thermostat.getMaxTemp()).toEqual(32);
//   });

//   it ("can raise temp to above 25 when powerSaver is off", function() {
//     thermostat.switchPowerSaverOff();
//     thermostat.up(7);
//     expect(thermostat.getCurrentTemp()).toEqual(27);
//   });

//   it ("should have power-saver on by default", function() {
//     expect(thermostat.isPowerSaverOn()).toEqual(true);
//   });

//   it ("should be able to turn powerSaver off and on", function(){
//     thermostat.switchPowerSaverOff();
//     expect(thermostat.isPowerSaverOn()).toEqual(false);
//     thermostat.switchPowerSaverOn();
//     expect(thermostat.isPowerSaverOn()).toEqual(true);
//   });

//   it ("should have a maximum temperature of 25 when powerSaver is on", function() {
//     expect(thermostat.getMaxTemp()).toEqual(25);
//   });

//   it ("it resets temperature to 20", function(){
//     thermostat.up(5);
//     thermostat.resetTemperature();
//     expect(thermostat.getCurrentTemp()).toEqual(20);
//   });

//   it ("it returns low-usage when temperature is less than 18 degrees", function() {
//     thermostat.down(3);
//     expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
//   });

//   it ("it returns medium-usage when temperature is between 18 and 25 degrees", function() {
//     expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
//   });

//   it ("it returns high-usage when temperature is above 25 degrees ", function() {
//     thermostat.switchPowerSaverOff()
//     thermostat.up(6)
//     expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
//   });
// });
