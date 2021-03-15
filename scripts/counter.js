$( document ).ready(function counter() {
	if (sessionStorage.count) {
	  sessionStorage.count = Number(sessionStorage.count) + 1;
	} else {
	  sessionStorage.count = 1;
	}
	
	$("#visits").text("Páginas visitadas "+sessionStorage.count);
});

