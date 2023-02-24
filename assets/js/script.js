//elementos que disparam o evento
let img = document.querySelector(".img2");
let fechar = document.querySelector(".xx");
//abrir o menu
img.addEventListener("click", abrirMenu);
function abrirMenu() {
  let nav = document.querySelector(".nav");
  nav.classList.toggle("navFecha").nav;
}
//fechar menu
fechar.addEventListener("click", fecherMenu);
function fecherMenu() {
  let nav = document.querySelector(".nav");
  nav.classList.toggle("navFecha").nav;
}
