/* Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. 
 Desenvolver um programa que remova os números a mais para corrigi-la. Mostrar a lista corrigida na tela apenas utilizando o comando "pop".*/

 // Lista inicial com números de 1 a 15
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Removendo os números extras usando apenas "pop"
while (listaNumeros.length > 5) {
    listaNumeros.pop();
}

// Exibindo a lista corrigida
console.log("Lista Corrigida:", listaNumeros);
