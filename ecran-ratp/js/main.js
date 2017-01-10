$(function() {
  var template = _.template($('#page-template').html()),
      $content = $('#content');

  var getData = function() {

    var schedules_url = 'https://api-ratp.pierre-grimaud.fr/v2/rers/b/stations/arcueil+cachan?destination=4';
    var traffic_url = 'https://api-ratp.pierre-grimaud.fr/v2/traffic/rers/b';

    $.when($.getJSON(schedules_url), $.getJSON(traffic_url)).done(function(schedules, traffic) {
            var date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                current_time = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);

            var trafficResponse = traffic[0].response,
                scheduleResponse = schedules[0].response,
                scheduleResponseInformation = scheduleResponse.informations;

            var data = {
                traffic: trafficResponse.message,
                line: scheduleResponseInformation.line,
                type: scheduleResponseInformation.type,
                horaires: scheduleResponse.schedules,
                destination: scheduleResponseInformation.destination.name,
                station: scheduleResponseInformation.station.name,
                current_time: current_time
            };

      $content.html(template(data));

    });
  };

  getData();
  setInterval(getData,20000);
});
