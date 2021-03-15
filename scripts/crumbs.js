$( document ).ready(function crumbs() {
	var route=document.URL;
	var contents = route.includes("index.html");
	
	if (contents) {
	  $("#route").text("Se encuentra en INICIO");
	} else {
	  $("#route").text("Se encuentra en ACTUALIDAD");
	}
});