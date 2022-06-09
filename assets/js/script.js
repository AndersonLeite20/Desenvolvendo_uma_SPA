let dados = [
          {
           compra: document.getElementById('#compra')
          },
          {
           venda: document.getElementById('#venda')    
          },
          {
           nome: document.getElementById('#input_nome')    
          },     
          {
           valor: document.getElementById('#input_valor')  
          }        
     ];  

     function transacao() { 
     localStorage.setItem('extrato', JSON.stringify(dados));
     let recebestring = localStorage.getItem('extrato')
     recebeobjto = JSON.parse(recebestring)
     recebeobjto  = document.querySelector('table') 
     recebeobjto.innerHTML +=`
          <tr ><td class="mais">${(dados[0].compra)}</td>
          <td class="descricao">${dados[2].nome}</td>
          <td class="soma">${dados[3].valor}<td><tr>`
     } 


     function limpar() {
          window.confirm('Deseja excluir os dados?')
          if (true){
               localStorage.clear('extrato')
          }
     }
         /* }else (true); {
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