function validate() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			Funcion(this);
		}
	};
	xhr.open("GET", "https://noemiortegacordoba.github.io/Publico//registrados.xml", true);
	xhr.send();
}

function Funcion(xml) {
	
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("user");
	var i;
	var userName;
	var userPassword;
	var state = false;
	var userLogin = document.forms["logForm"]["user"].value;
	var passwordLogin = document.forms["logForm"]["password"].value;
	
	for (i = 0; i < x.length; i++) {
		userName = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
		userPassword = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

		if (userName == userLogin && userPassword == passwordLogin) {
			state = true;
		} 
	}
	
	if (state == true) {
		sessionStorage.setItem("nomUsr", document.forms["logForm"]["user"].value);
	} else {
		window.alert("La clave o usuario es incorrecta");
	}
}

function loadUser() {
	if (sessionStorage.getItem("nomUsr") !== null) {
		$("#login").css("display", "none");
		$("#message").css("display", "initial");
		document.getElementById('detail').innerHTML = sessionStorage.getItem("nomUsr");
	}
}

function deleteUser() {
	sessionStorage.removeItem("nomUsr");
	$("#login").css("display", "block");
	$("#message").css("display", "none");
}

