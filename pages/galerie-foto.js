const modal = document.getElementById("myModal");
const imageContainer = document.getElementsByClassName("row");
const modalImg = document.getElementById("img01");

Array.from(document.querySelectorAll(".img")).forEach(item => {
    item.addEventListener("click", event => {
      modal.style.display = "block";
      modalImg.src = event.target.src;
    });
});
  
const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
    modal.style.display = "none";
};