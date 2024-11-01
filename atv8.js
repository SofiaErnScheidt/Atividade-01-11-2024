/* Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final. */

// Criação do array inicialmente vazio para as tarefas de limpeza
let tarefasLimpeza = [];

// Simulando a entrada do usuário para adicionar quatro tarefas
let tarefasAdicionadas = ["varrer", "lavar louça", "tirar o pó", "passar roupa"]; // Substitua pelas tarefas reais

// Adicionando as quatro tarefas
for (let i = 0; i < 4; i++) {
    tarefasLimpeza.push(tarefasAdicionadas[i]);
}

// Removendo a terceira tarefa (índice 2)
tarefasLimpeza.splice(2, 1);

// Mudando a segunda tarefa para "limpar banheiro"
tarefasLimpeza[1] = "limpar banheiro";

// Imprimindo a lista de tarefas de limpeza atualizada
console.log("Lista de Tarefas de Limpeza Atualizada:", tarefasLimpeza);
