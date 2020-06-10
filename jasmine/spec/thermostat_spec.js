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

  it ("with powerSaver on, it throws an eroor if temp is increased to higher than 25", function(){
    var thermostat = new Thermostat();
    expect(function() {thermostat.up(6)}).toThrow("Temperature would be too high!")
  });

  it ("switching powerSaver off sets the maxTemp to 32", function() {
    var thermostat = new Thermostat();
    thermostat.switchPowerSaverOff();
    expect(thermostat.getMaxTemp()).toEqual(32);
  });

  it ("can raise temp to above 25 when powerSaver is off", function() {
    var thermostat = new Thermostat();
    thermostat.switchPowerSaverOff();
    thermostat.up(7);
    expect(thermostat.getCurrentTemp()).toEqual(27);
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

  it ("should have a maximum temperature of 25 when powerSaver is on", function(){
    var thermostat = new Thermostat();
    expect(thermostat.getMaxTemp()).toEqual(25);
  });

});
