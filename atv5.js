/* Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final. */

// Criando um array chamado filmesFavoritos com três filmes
let filmesFavoritos = ["O Poderoso Chefão", "Pulp Fiction", "O Senhor dos Anéis"];

// Modificando o primeiro filme para um novo título
filmesFavoritos[0] = "Interestelar";

// Verificando se o último filme da lista é "Harry Potter"
if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter");
}

// Imprimindo a lista de filmes favoritos
console.log("Lista de Filmes Favoritos:", filmesFavoritos);

