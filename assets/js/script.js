     function extratos() {
          let dados = [
               {
               compra: document.getElementById('compra').value,
               vendas: document.getElementById('venda').value,    
               nome: document.getElementById('input_nome').value,    
               valor: document.getElementById('input_valor').value,  
               }        
          ];  
     }

     function transacao() { 
     localStorage.setItem('extrato', JSON.stringify(extrato()));
     let recebestring = localStorage.getItem('extrato')
     recebeobjto = JSON.parse(recebestring)
     recebeobjto  = document.querySelector('table') 
     recebeobjto.innerHTML +=`
          <tr ><td class="mais">${(dados[0])}</td>
          <td class="descricao">${dados[3]}</td>
          <td class="soma">${dados[4]}<td><tr>`
     } 
     
     function limpatabela() {
          while ((localStorage.clear == true)) {
               dados = recebeobjto.splice(recebeobjto)
          }
     }
     function limpar() {
          let sim = window.confirm('Deseja excluir os dados?')
          if (sim){
               localStorage.clear('extrato')
               limpatabela()
          }
     }

     
         /* else (true); 
              `<tr >
               <td class="mais">-</td>
               <td class="descricao">${dados[person].nome}</td>
               <td class="soma">${dados[person].valor}</td>
               </tr>`
          }*/
        





/*    let compra = document.getElementById('#compra'.value)
     let venda = document.getElementById('#venda'.value)
     let nomes = document.getElementById('#input_nome'.value)
     let valor = document.getElementById('#input_valore'.valu)
   
     let transacoes = [{
          compra,venda,nomes,valor
     }]
     
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



                   
     <tr>    
          <td class="lucro" colspan="3">[LUCRO]</td>
     </tr>
*/