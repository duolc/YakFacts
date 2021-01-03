$(document).ready(function() {
	$.getJSON('assets/js/yakfacts.json', function(jd) {
		 $('#factoids').html('<p> Name: ' + jd.id + '</p>');
		 $('#factoids').append('<p>Age : ' + jd.fact + '</p>');
		 $('#factoids').append('<p> Sex: ' + jd.source + '</p>');
	   });
  });