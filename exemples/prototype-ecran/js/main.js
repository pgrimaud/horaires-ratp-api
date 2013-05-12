$(window).load(function() {
  var template = _.template($('#page-template').html()),
      $content = $('#content');

  var getData = function() {
    var req = $.getJSON('http://api-ratp.pierre-grimaud.fr/rer/b/arcueil+cachan/cdg+mitry');
    req.done(function (data) {
      data.destination = data.destination.replace(' ', '<br />');
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