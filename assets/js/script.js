let dados = [];
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
let validar = document.querySelector(".botao");
validar.addEventListener("click", validarForm);

function validarForm(evento) {
  evento.preventDefault();
  let tipo = document.getElementById("select").value;
  let mercadoria = document.querySelector(".input-mercadoria").value;
  let valor = document.querySelector(".input-input-valor").value;

  dados.push({
    tipo: tipo,
    mercadoria: mercadoria,
    valor: valor,
  });
  console.log(dados);
}
