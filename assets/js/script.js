//variavel para criar objeto no local storage
let dados = [];

//Verificar se o local storage tem alguma informação.
//se tiver imformação o json retorna um objeto do tipo javascript.
if(localStorage.getItem('dados')) {
    dados = JSON.parse(localStorage.getItem('dados'));
}

//abrir o menu
var abrirFecar = document.querySelector('.menu')
abrirFecar.addEventListener('click',abriFecha )
function abriFecha() {
    document.querySelectorAll('nav')[0].classList.toggle('abrir')
}
//fechar o menu
var abrirFecar = document.querySelector('.fechaMenu')
abrirFecar.addEventListener('click', esconde )
function esconde() {
    document.querySelectorAll('nav')[0].classList.toggle('abrir')
}   

//Função para mostrar os dados do localstorage na pagina.
function transacao() {
    let dados = JSON.parse(localStorage.getItem('dados'));
    let recebeobjto = document.querySelector('thead')
    
    /*Verificar se o localstorage está nulo (sem dados).
    Caso não esteja , recebe uma função map().
    Essa função lista todas as keys do localstorage e mostra no HTML.*/
    if(dados != null) {
        recebeobjto.innerHTML = dados.map((dados) => {
            return (
                `<tr class="tr_b">
                    <td class="td_+">+</td>
                    <td class="td_mercadoria">`+ dados.nome +`</td>
                    <td>${formatterCurrency(Number(dados.valor))}</td>
                </tr>`    
            )
        })
        .join('') //Junta todos os elementos do dados.map e retorna uma string.
        sinal()
        somaValores()      
    } 
}

//Função para somar os valores do input valor.
function somaValores() {
    var total = 0;
    var valordoinput
    /*Verificar se o select está selecionado igual a "compra".
    Caso esteja selecionado o sinal e correspondido (alterado).*/
    for(produto in dados) {  
        if(dados[produto].selecao == 'compra') {
            valordoinput = dados[produto];
            total -= Number(dados[produto].valor)
        } else {
            total += Number(dados[produto].valor)
        }          
    }

    /*Verificar se o temanho dos dados e maior que zero.
    Caso seja maior o total é mostrado com o status [LUCRO] ou [PREJUIZO].*/  
    if(dados.length > 0) {
        var lucPrej = ''
            if(total > 0) {
                lucPrej = '[LUCRO]'
            }    
            if(total < 0) {
                lucPrej = '[PREJUÍZO]'
            }
        }             
        let resultobj = document.querySelector('.total')
        resultobj.innerHTML = `
        <tr class="lucro_preju">
            <td class="total-td">Total</td>
            <td class="td-total">${formatterCurrency(Number(total < 0 ? total*-1 : total))}</td>
        </tr><span class="span">${lucPrej}</span>  
        `          
    }
/*
// função para apagar os dados do extrato e desenha novamente o extrato vazio
function atualizar() {
    let tabela = document.querySelector('.tabela')
    tabela.innerHTML = `
    <table>
        <tr class="tr_a">
            <th>Mercadoria</t>
            <th>Valor</th>
        </tr>
        <thead>    
            <tr class="tr_b">
                <td class="td_mercadoria">
                    Nenhuma mercadoria cadastrada.
                </td>
            </tr>
        </thead>
    </table>`                 
}
*/
// Funçao para o formato monetário no Brasil (BRL = R$)
function formatterCurrency(value) {
    const valueFormat = value.toLocaleString('pt-br',{style: 'currency',  currency: 'BRL'});
    return valueFormat;
}
    
/*Mascara para formatar o input valor automaticamente no padrão monetário brasileiro (BRL = R$) */
function moeda(e) {
    var elemento = document.getElementById('input_valor')
    var valor = elemento.value

    valor = valor.replace(/[\.,]/g, '') 
    valor + e.key
    valor = parseFloat(valor.replace(/([0-9]{2})$/,".$1"))
    elemento.value = valor.toLocaleString('pt-br',{minimumFractionDigits: 2})
    if(typeof NaN === typeof 0)
    e.preventDefault()
}

//Função para mudar o sinal de acordo com a seleção compra ou venda.
function sinal() {
    let dados = JSON.parse(localStorage.getItem('dados'))

    //Percorre todos os dados e verifica se o input select esta selecionado igual a compra.
    for(i = 0 ; i < dados.length ; i++) {
        if(dados[i].selecao == 'compra') {
            document.getElementsByClassName('td_+')[i].innerHTML = '-'
        } else {
            document.getElementsByClassName('td_+')[i].innerHTML = '+'
        }
    }
}

/*O link (limpar dados) fica na espera (addEventListener) para ser executado ao ser clicado  */
let linkLimpar = document.querySelector('.li_limpar')
linkLimpar.addEventListener('click', limpar)

/*função para deletar os dados do local storage .
Se não tem nenhuma transação cadastrada aparece um alert.*/
function limpar () {
    if(dados.length <= 0) {
        window.alert('Nenhum registro de transações!')
    }else {
        var caixaTexto = confirm('Deseja excluir as imformações?')
        if (caixaTexto == true) {  
           localStorage.clear()  
           atualizaIndex()
        }else {
            window.alert('Exclusões canceladas!')
        }  
    }    
    transacao()
    somaValores()   
} 

/*Função que para de atualizar a página ao clicar no botão subit (adicionar transação)*/
function validacao(event) {
    event.preventDefault()

    var selecao = document.getElementById('input_select').value
    var nome = document.getElementById('input-nome').value
    var valor = document.getElementById('input_valor').value

    //Adicionando os dados do localstorage em uma chave e valor.
    dados.push({
        selecao:selecao,
        nome:nome,

        //replaceALL faz a troca de ponto para espaço e de virgula para ponto.
        valor: valor.replaceAll('.','').replaceAll(',','.')
    })

    /*Transforma os dados do loaclstorage em string.
    Grava os dados no localstorage.*/
    let dadosString = JSON.stringify(dados)
    localStorage.setItem('dados', dadosString)

    //mostrar novamente a página com os dados atualizados    
    transacao()
}

//função para carregar a página inicial index
function atualizaIndex() {
    location.href="./index.html"
}