$(window).load(function() {
  var template = _.template($('#page-template').html()),
      $content = $('#content');

  var getData = function() {

    var schedules_url = 'http://api-ratp.pierre-grimaud.fr/v2/rers/b/stations/arcueil+cachan?destination=4';
    var traffic_url = 'http://api-ratp.pierre-grimaud.fr/v2/traffic/rers/b';

    $.when($.getJSON(schedules_url), $.getJSON(traffic_url)).done(function(schedules, traffic) {
      var data = new Object();
      data.traffic = traffic[0].response.message;

      var response = schedules[0].response.informations.destination.name.replace(' - ', '<br />');
      data.line = schedules[0].response.informations.line;
      data.type = schedules[0].response.informations.type;
      data.horaires = schedules[0].response.schedules;
      data.destination = schedules[0].response.informations.destination.name
      data.station = schedules[0].response.informations.station.name;

      var date = new Date(),
          hours = date.getHours(),
          minutes = date.getMinutes();
      data.current_time = (hours < 10 ? '0' + hours : hours) + ':' +
                          (minutes < 10 ? '0' + minutes : minutes);

      $content.html(template(data));$

    });
  };

  getData();
  setInterval(getData,20000);
});