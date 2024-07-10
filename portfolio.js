
document.addEventListener("DOMContentLoaded", function () {
  // Sélection de l'élément avec l'ID "lire"
  var lire1Element = document.getElementById("lire1");

  // Sélection de l'élément avec la classe "liste1"
  var liste1Element = document.querySelector(".liste1");

  // Ajout d'un écouteur d'événement pour le survol (mouseover)
  lire1Element.addEventListener("mouseover", function () {
    // Affiche la classe liste1 lors du survol
    liste1Element.style.display = "block";
  });

  lire1Element.addEventListener("mouseout", function () {
    liste1Element.style.display = "none";
  });

  liste1Element.addEventListener("mouseover", function () {
    liste1Element.style.display = "block";
  });
  liste1Element.addEventListener("mouseout", function () {
    liste1Element.style.display = "none";
  });
});

// ------------------------ça c'est pour la liste2---------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  var lire3Element = document.getElementById("lire3");

  var liste2Element = document.querySelector(".liste2");

  lire3Element.addEventListener("mouseover", function () {
    liste2Element.style.display = "block";
  });

  lire3Element.addEventListener("mouseout", function () {
    liste2Element.style.display = "none";
  });
  liste2Element.addEventListener("mouseover", function () {
    liste2Element.style.display = "block";
  });
  liste2Element.addEventListener("mouseout", function () {
    liste2Element.style.display = "none";
  });
});

// --------------------ça c'est pour la liste3---------------------------//

document.addEventListener("DOMContentLoaded", function () {
  var lire4Element = document.getElementById("lire4");

  var liste3Element = document.querySelector(".liste3");

  lire4Element.addEventListener("mouseover", function () {
    liste3Element.style.display = "block";
  });

  lire4Element.addEventListener("mouseout", function () {
    liste3Element.style.display = "none";
  });
  liste3Element.addEventListener("mouseover", function () {
    liste3Element.style.display = "block";
  });

  liste3Element.addEventListener("mouseout", function () {
    liste3Element.style.display = "none";
  });
});

function changeLanguage(lang){
  document.getElementById('001').textContent = data[lang]["001"];
  document.getElementById('002').textContent = data[lang]["002"];
  document.getElementById('003').textContent = data[lang]["003"];
  document.getElementById('004').textContent = data[lang]["004"];
  document.getElementById('005').textContent = data[lang]["005"];


  document.getElementById('006').textContent = data[lang]["006"];
  document.getElementById('007').textContent = data[lang]["007"];
  document.getElementById('008').textContent = data[lang]["008"];
  document.getElementById('009').textContent = data[lang]["009"];
  document.getElementById('010').textContent = data[lang]["010"];
  document.getElementById('011').textContent = data[lang]["011"];



  document.getElementById('012').textContent = data[lang]["012"];
  document.getElementById('013').textContent = data[lang]["013"];
  document.getElementById('014').textContent = data[lang]["014"];
  document.getElementById('015').textContent = data[lang]["015"];
  document.getElementById('111').textContent = data[lang]["111"];
  document.getElementById('017').textContent = data[lang]["017"];




  document.getElementById('018').textContent = data[lang]["018"];
  document.getElementById('019').textContent = data[lang]["019"];
  document.getElementById('020').textContent = data[lang]["020"];
  document.getElementById('021').textContent = data[lang]["021"];
  document.getElementById('022').textContent = data[lang]["022"];
  document.getElementById('023').textContent = data[lang]["023"];



  document.getElementById('024').textContent = data[lang]["024"];
  document.getElementById('025').textContent = data[lang]["025"];
  document.getElementById('026').textContent = data[lang]["026"];
  document.getElementById('027').textContent = data[lang]["027"];
  document.getElementById('028').textContent = data[lang]["028"];
  document.getElementById('029').textContent = data[lang]["029"];
  document.getElementById('030').textContent = data[lang]["030"];
  document.getElementById('031').textContent = data[lang]["031"];


  document.getElementById('032').textContent = data[lang]["032"];
  document.getElementById('033').textContent = data[lang]["033"];
  document.getElementById('034').textContent = data[lang]["034"];
  document.getElementById('035').textContent = data[lang]["035"];
  document.getElementById('036').textContent = data[lang]["036"];


  document.getElementById('037').textContent = data[lang]["037"];
  document.getElementById('038').textContent = data[lang]["038"];
  document.getElementById('039').textContent = data[lang]["039"];
  document.getElementById('040').textContent = data[lang]["040"];

}