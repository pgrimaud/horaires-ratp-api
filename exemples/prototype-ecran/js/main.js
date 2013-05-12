function getData(){
	$.get('script/ajax.php', function(data) {
		$('tbody').empty().append(data);
	});
}

$(window).load(function() {
	getData();
});

setInterval(getData,20000);