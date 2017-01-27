'use strict';

var end;
var myTimer;

var formatTimeString = function(millis){
	var curentTimeString = new Date(millis);
	return curentTimeString.getHours() + ":" + curentTimeString.getMinutes() + ":" + curentTimeString.getSeconds() + "  " + curentTimeString.getMilliseconds();
}

var timer = function(){
	var currentTime = Date.now();
	var timeString = formatTimeString(currentTime);
	$('.time').text(timeString);
	if(currentTime >= end){
		clearInterval(myTimer);
		$(".minInput").attr('disabled', false);
	}
}

var startTimer = function(){
	$(".minInput").attr('disabled', true);
	var start = Date.now();
	end = start + ($(".minInput").val() * $(".unit").val() * 1000);
	$(".start").text(formatTimeString(start));
	$(".end").text(formatTimeString(end));
	myTimer  = setInterval(function() {timer()}, 1);
}