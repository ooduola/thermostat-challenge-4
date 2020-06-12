$(document).ready(function() {

  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemp();
  });

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemp();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemp();
  })
  
  $('#powersaving-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('ON');
  });

  $('#powersaving-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('OFF');
  });

  function updateTemp() {
    $('#temperature').text(thermostat.temperature);

    if(thermostat.currentUsage() === 'low-usage') {
      $('#temperature').css('color', 'green')
    } else if(thermostat.currentUsage() === 'medium-usage') { 
        $('#temperature').css('color', 'orange')
    } else {
      $('#temperature').css('color', 'red')
    }
  };
   
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c2d102055ae8d191cb13bfd37d12059d&units=metric', function(data) {
  
  $('#city-temperature').text(data.main.temp);
  })

})