describe("thermostat",function(){
  it ("thermostat should start at 20 degrees", function(){
    var thermostat = new Thermostat();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it ("should increase temperature with an up function", function(){
    var thermostat = new Thermostat();
    thermostat.up(1);
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it ("should decrease the temperature with a down function", function(){
    var thermostat = new Thermostat();
    thermostat.down(1);
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it ("should throw an error if temperature is decreased to lower than 10", function(){
    var thermostat = new Thermostat();
    expect(function() {thermostat.down(11)}).toThrow("Temperature would be too low!")
  });

  it ("should throw an error if temperature is incresed to higher than 32", function(){
    var thermostat = new Thermostat();
    expect(function() {thermostat.up(13)}).toThrow("Temperature would be too high!")
  });

  it ("should have power-saver on by default", function() {
    var thermostat = new Thermostat();
    expect(thermostat.isPowerSaverOn()).toEqual(true);
  });

  it ("should be able to turn powerSaver off", function(){
    var thermostat = new Thermostat();
    thermostat.switchPowerSaverOff();
    expect(thermostat.isPowerSaverOn()).toEqual(false);
  });
});
