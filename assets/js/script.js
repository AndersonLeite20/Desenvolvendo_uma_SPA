     
let transacoes = [];{
     let compra = document.getElementById('compra')
     let  venda = document.getElementById('venda')
     let nome = document.getElementById('input_nome')
     let valor = document.getElementById('input_valor')
}
function transacao() {
     localStorage.setItem('dados', JSON.stringify(transacoes));
     let recebestring = localStorage.getItem('dados')
     recebeobjto = JSON.parse(recebestring)
     recebeobjto  = document.querySelector('table')
     if (transacoes[0] == true) {        
              recebeobjto.innerHTML += `<tr >
               <td class="mais">-</td>
               <td class="descricao">produto</td>
               <td class="soma">999</td>
               </tr>`
          }else (transacoes[1] == true); {
               recebeobjto.innerHTML +=`<tr >
               <td class="mais">+</td>
               <td class="descricao">descriçâo</td>
               <td class="soma">000</td>          
               </tr>`
          }     
     }
     function limpar() {
          window.confirm('Deseja excluir os dados?')
          if (true){
               localStorage.clear(transacoes)
          }
     }




/*                  
     <tr>    
          <td class="lucro" colspan="3">[LUCRO]</td>
     </tr>
*/