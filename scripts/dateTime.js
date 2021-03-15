dateTime();

function dateTime() {
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();

	if(hours < 10) { hours = '0' + hours; }
	if(minutes < 10) { minutes = '0' + minutes; }
	if(seconds < 10) { seconds = '0' + seconds; }
	
	$("#date").text(d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear());
	$("#time").text(hours+':'+minutes+':'+seconds);
}

window.onload = function() {
  setInterval(dateTime, 1000);
}