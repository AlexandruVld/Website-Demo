
const hamburgerMenu = document.getElementById("hamburgerMenu");
const liButton = document.getElementById("button");
hamburgerMenu.addEventListener("click", openNav);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
};
   
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
};
