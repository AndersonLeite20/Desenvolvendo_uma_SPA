//variavel para criar objeto no local storage
let dados = [];
/*Verificar se o local storage tem alguma informação.
se tiver imformação o json retorna um objeto do tipo javascript.*/
if (localStorage.getItem('dados')) {
     dados = JSON.parse(localStorage.getItem('dados'));
}
//Função para mostrar os dados do localstorage na pagina.
function transacao() {
   let dados = JSON.parse(localStorage.getItem('dados'));
   let recebeobjto = document.querySelector('.total');
   /*Verificar se o localstorage está nulo (sem dados).
   Caso não esteja , recebe uma função map().
   Essa função lista todas as keys do localstorage e mostra no HTML.*/
   if(dados != null) {
      recebeobjto.innerHTML = dados.map((dados) => {
         return (
         `
         <tr>
            <tr>
               <td class="mais">+</td>
               <td class="descricao">` + dados.nome + `</td>
               <td class="soma">${formatterCurrency(Number(dados.valor))}</td>
            </tr>   
         </tr>
         `
         )
      })
   .join(''); //Junta todos os elementos do dados.map e retorna uma string.
   sinal()
   somaValores()
   }
}
//Função para somar os valores do input valor.
function somaValores() {
   var total = 0;
   let valorInput;

   /*Verificar se o select está selecionado igual a "compra".
   Caso esteja selecionado o sinal e correspondido (alterado).*/
   for (produto in dados) {
      if (dados[produto].selecao == 'compra') {
         valorInput = dados[produto];
         total -= Number(dados[produto].valor)
      } else {
         total += Number(dados[produto].valor);
      }
   }

   /*Verificar se o temanho dos dados e maior que zero.
   Caso seja maior o total é mostrado com o status [LUCRO] ou [PREJUIZO].*/
   if (dados.length > 0) {
      let resultobj = document.querySelector('.resultado');
      resultobj.innerHTML = `
      <tr class="adicionar">
         <td>Total</td>
         <td>${formatterCurrency(Number(total))}</td>
      </tr>`
      resultobj.innerHTML += `
         <tr>
            <td colspan="3">
               ${Math.sign(total) > 0 ? '[LUCRO]' : '[PREJUÍZO]'}
            </td>
         </tr>`
   }      
} 
/*função para deletar os dados do local storage .
Se não tem nenhuma transação cadastrada aparece um alert.*/
function limpar () {
   if (dados.length <= 0) {
      alert('Nenhum registro de transaçãoes')
   } else {
      let caixaTexto = confirm('Deseja excluir as transaçãoe?')
      if (caixaTexto == true) {
      localStorage.clear()
      window.alert('transações excluidas!')
      } else {
         alert('Exclusões canseadas')
      }
   }
   transacao() 
   location.reload() //atualizar a pagina
}
/*O link (limpar dados) fica na espera (addEventListener) para ser executado ao ser clicado  */
let linkLimpar = document.querySelector('.a_2')
linkLimpar.addEventListener('clic',limpar)
//Funçao para a formataão monetári no Brasil (BRL = R$)
function formatterCurrency(value) {
   const valueFormat = value.toLocaleString('pt-BR',{
      style:'currency',
      currency:'BRL',
   })
   return valueFormat;
}
/*Mascara para formatar o input valor automaticamente no padrão monetário brasileiro (BRL = R$) */
function moeda() {
   let elemento = document.getElementById('input_valor')
   let valor = elemento.value

   valor = parseInt(valor.replace(/[\D]+/g, ''))
   valor = valor + ''
   valor = valor.replace(/([0-9]{2})$/g, ',$1')

   elemento.value = valor
   if (valor == 'NaN') elemento.value = ''
}
//Função para mudar o sinal de acordo com a seleção compra ou venda.
function sinal() {
   let dados = JSON.parse(localStorage.getItem('dados'))
   //Percorre todos os dados e verifica se o input select esta selecionado igual a compra.
   for (i = 0; i < dados.length; i++) {
      if (dados[i].selecao == 'compra') {
         document.getElementsByClassName('mais')[i].innerHTML = '-'
      } else {
         document.getElementsByClassName('mais')[i].innerHTML = '+'
      }
   }
}
/*Função que para de atualizar a página ao clicar no botão subit (adicionar transação)*/
function validacao(event) {
   event.preventDefault()

   var selecao = document.getElementById('inpt-select').value;
   var nome = document.getElementById('input_nome').value;
   var valor = document.getElementById('input_valor').value;

   //Adicionando os dados do localstorage em uma chave e valor.
   dados.push({
      selecao:selecao,
      nome:nome,
      //replaceALL faz a troca de ponto para espaço e de virgula paraq ponto
      valor: valor.replaceAll('.', '').replaceAll(',','.'),
   })
   /*Transforma os dados do loaclstorage em string.
   Grava os dados no localstorage.*/
   let dadosString = JSON.stringify(dados)
   localStorage.setItem('dados', dadosString)
   //mostrar novamente a página com os dados atualizados
   transacao();
}   