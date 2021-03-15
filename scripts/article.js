function openArticle(evt, aB) {
  var i, tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  document.getElementById(aB).style.display = "block";
  evt.currentTarget.className += " active";
}
