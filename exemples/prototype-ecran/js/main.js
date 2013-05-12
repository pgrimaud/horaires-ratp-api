$(window).load(function() {
  var template = _.template($('#page-template').html()),
      $content = $('#content');

  var getData = function() {
    var req = $.getJSON('http://api-ratp.pierre-grimaud.fr/rer/b/arcueil+cachan/cdg+mitry');
    req.done(function (data) {
      data.destination = data.destination.replace(' ', '<br />');
      var date = new Date();
      data.current_time = date.getHours() + ':' + date.getMinutes();
      $content.html(template(data));
    });
    req.error(function (err) {
      console.error(err);
    });
  };

  getData();
  setInterval(getData,20000);
});