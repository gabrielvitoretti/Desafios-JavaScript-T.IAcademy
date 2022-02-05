let frutas = [
    {descricao:'Mamão', preco: 3.00},
    {descricao:'Banana', preco: 2.79},
    {descricao:'Uva', preco: 4.00},
    {descricao:'Morango', preco: 8.95},
    {descricao:'Goiaba', preco: 5.50}
]
let primeiraLista = document.querySelector("#produtos");
let totalProdutos = document.querySelector("#mostraTotalCompra");
let novaCesta = document.querySelector("#cestaDoCliente");
totalProdutos.value = parseFloat(0);
for(let prod of frutas){
    let filhoLi = document.createElement('li');
    filhoLi.setAttribute('id', prod.descricao);
    filhoLi.setAttribute('data-preco', prod.preco);
    filhoLi.setAttribute('onclick', `novaLista(${filhoLi.getAttribute("id")}, ${filhoLi.getAttribute("data-preco")})`);
    primeiraLista.appendChild(filhoLi).textContent = prod.descricao;
}
function novaLista(id, valor){
    if(!document.getElementById(`novaLista${id.id}`)){
        let novoLi = document.createElement('li');
        novoLi.setAttribute('id', `novaLista${id.id}`);
        novoLi.innerHTML = `${id.id}`;
        totalProdutos.value = (parseFloat(totalProdutos.value) +valor).toFixed(2);
        novaCesta.appendChild(novoLi);
    }
    else{
        alert("Produto já inserido! Favor escolher outro.");
    }
}
