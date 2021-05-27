function validate() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			miFuncion(this);
		}
	};
	xhr.open("GET", "https://noemiortegacordoba.github.io/Publico//registrados.xml", true);
	xhr.send();
}

function miFuncion(xml) {
	
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("user");
	var i;
	var usrNom;
	var usrPsw;
	var estado = false;
	var userLog = document.forms["logForm"]["user"].value;
	var passLog = document.forms["logForm"]["password"].value;
	

	for (i = 0; i < x.length; i++) {
		usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
		usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

		if (usrNom == userLog && usrPsw == passLog) {
			estado = true;
		} 
	}
	if (estado == true) {
		sessionStorage.setItem("nomUsr", document.forms["logForm"]["user"].value);
	} else {
		window.alert("La clave o user es incorrecta");
	}

}

function loadUSer() {
	if (sessionStorage.getItem("nomUsr") !== null) {
		$("#login").css("display", "none");
		$("#mensajeLogin").css("display", "initial");
		document.getElementById('aqui').innerHTML = sessionStorage.getItem("nomUsr");
	}
}

function borraUsr() {
	sessionStorage.removeItem("nomUsr");
	$("#login").css("display", "block");
	$("#mensajeLogin").css("display", "none");
}

