function validarXML() {
	// lee desde aquí.
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			miFuncion(this);
		}
	};
	xhr.open("GET", "https://github.com/NoemiOrtegaCordoba/Publico/blob/main/finalProject/registrados.xml", true);
	xhr.send();
}

function miFuncion(xml) {
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("usuario");
	var i;
	var usrNom;
	var usrPsw;
	var estado = false;
	var userLog = document.forms["miFormulario"]["usuario"].value;
	var passLog = document.forms["miFormulario"]["pass"].value;
	

	for (i = 0; i < x.length; i++) {
		usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
		usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

		if (usrNom == userLog && usrPsw == passLog) {
			
			estado = true;
		} 
	}
	if (estado == true) {
		sessionStorage.setItem("nomUsr", document.forms["miFormulario"]["usuario"].value);
	} else {
		window.alert("La clave o usuario es incorrecta");
	}
}

function cargarUser() {
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

