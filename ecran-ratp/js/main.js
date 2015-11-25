$(window).load(function() {
  var template = _.template($('#page-template').html()),
      $content = $('#content');

  var getData = function() {
    var req = $.getJSON('http://api-ratp.pierre-grimaud.fr/v2/metros/1/stations/87?destination=6');

    req.done(function (data) {
      data.destination = data.response.informations.destination.name.replace(' - ', '<br />');
      data.line = data.response.informations.line;
      data.type = data.response.informations.type;
      data.horaires = data.response.schedules;

      var date = new Date(),
          hours = date.getHours(),
          minutes = date.getMinutes();
      data.current_time = (hours < 10 ? '0' + hours : hours) + ':' +
                          (minutes < 10 ? '0' + minutes : minutes);
      $content.html(template(data));
    });
    req.error(function (err) {
      console.error(err);
    });
  };

  getData();
  setInterval(getData,20000);
});