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

  it('has a maximum temp of 25 if power saving mode On', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemp()).toEqual(25)
  })

  it('has a maximum temp of 32 if power saving mode Off', function() {
    thermostat.switchPowerSavingModeOff()
    for (var i = 0; i < 15; i++) {
      thermostat.up()
    }
    expect(thermostat.getCurrentTemp()).toEqual(32)
  });

  it('has a method to switch off the PSM', function() {
    thermostat.switchPowerSavingModeOff()
    expect(thermostat.isPowerSavingModeOn()).toBe(false)
  });

  it('has a method to switch PSM on', function() {
    thermostat.switchPowerSavingModeOff()
    thermostat.switchPowerSavingModeOn()
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('You can reset the temperature to 20 with a reset function', function() {
    thermostat.up()
    thermostat.resetTemperature()
    expect(thermostat.getCurrentTemp()).toEqual(20)
  });

  describe( "current usage", function() { 

    it('it returns low-usage when temperature is less that 18 degrees', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      } 
      expect(thermostat.currentUsage()).toEqual("low-usage")
    });

    it('it returns medium-usage when temperature is between 18 and 25 degrees', function() {
      expect(thermostat.currentUsage()).toEqual("medium-usage")
    });

    it('it returns low-usage when temperature is less that 18 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      } 
      expect(thermostat.currentUsage()).toEqual("high-usage")
    });
  });
  // You can ask about the thermostat's current energy usage: 
  // < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
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
