/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

// Criando um array vazio para a lista de compras
let listaCompras = [];

// Simulando a entrada do usuário
let itensAdicionados = ["item1", "item2", "item3"]; // Substitua pelos itens reais

// Adicionando três itens à lista
for (let i = 0; i < 3; i++) {
    listaCompras.push(itensAdicionados[i]);
}

// Verificando se o último item adicionado é "leite"
if (listaCompras[listaCompras.length - 1] !== "leite") {
    listaCompras.push("leite");
}

// Imprimindo a lista de compras
console.log("Lista de compras final:", listaCompras);
