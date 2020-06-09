descibe("thermostat",function(){
  it ("thermostat should start at 20 degrees", function(){
    var thermostat = new Thermostat();
    expect(thermostat.currentTemp()).toEqual(20);
  });
});
