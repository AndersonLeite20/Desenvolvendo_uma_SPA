let dados = [];
//localStorage.getItem(dados);
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

//Salvar dados no local storage
localStorage.setItem("nome", JSON.stringify(dados));

//somar os valores e exibir uma tabela
function somaValoress() {}
//validar o conteudo do formúlario
let validar = document.querySelector(".botao");
validar.addEventListener("click", validarForm);
function validarForm(evento) {
  evento.preventDefault();

  let tipo = document.getElementById("select").value;
  let mercadoria = document.querySelector(".input-mercadoria").value;
  let valor = document.querySelector(".input-input-valor").value;
  console.log(mercadoria, valor, tipo);
  //função para somar os valores

  //Adicionar valores ao arraw dados
  dados.push({
    tipo: tipo,
    mercadoria: mercadoria,
    valor: parseFloat(valor),
  });
  console.log(dados);

  let reacumulado = 0;
  for (let i = 0; i <= dados.length; i + 1) {
    reacumulado += dados[i].valor;
  }
  console.log(i);
  console.log(reacumulado);
}
