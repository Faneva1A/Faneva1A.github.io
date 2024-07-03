
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

// --------------------ça c'est pour la liste3---------------------------------------//

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
