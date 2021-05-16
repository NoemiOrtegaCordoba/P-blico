 function validarXML() {
	// lee desde aquí.
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			miFuncion(this);
		}
	};
	xhr.open("GET", "https://github.com/NoemiOrtegaCordoba/Publico/blob/main/finalProject/scripts/users.xml", true);
	xhr.send();
}

function miFuncion(xml) {
	
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("user");
	var i;
	var usrNom;
	var usrPsw;
	var estado = false;
	var userLog = document.getElementById("user").value; 
	var passLog = document.getElementById("password").value; 
	
	if(txtU.includes(userValue)&&txtP.includes(passwordValue)){
	

	for (i = 0; i < x.length; i++) {
		// leo las etiquetas que me interesan del objeto
		usrNom = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
		usrPsw = x[i].getElementsByTagName("password")[0].childNodes[0].nodeValue;

		if (usrNom == userLog && usrPsw == passLog) {
			
			estado = true;
		} 
	}
	if (estado == true) {
		sessionStorage.setItem("nomUsr", document.getElementById("user").value); 
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
	// elimino la variable nomUsr
	sessionStorage.removeItem("nomUsr");
	$("#login").css("display", "block");
	$("#mensajeLogin").css("display", "none");
}