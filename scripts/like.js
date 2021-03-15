showLikes();

function likes() {
    localStorage.like = 1;
	showLikes();
}

function dislikes() {
    localStorage.like = 0;
	showLikes();
}

function showLikes(){
	if(localStorage.like==1){
		//document.getElementById("likes").innerHTML =  "¡Me gusta!";
		 $("#likes").text("¡Me gusta!");
	}else{
		//document.getElementById("likes").innerHTML =  "¡No me gusta!";
		$("#likes").text("¡No me gusta!");
	}
}