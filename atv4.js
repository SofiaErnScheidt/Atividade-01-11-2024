/*Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.*/

// Criação do array vazio
let tarefas = [];

// Simulando a entrada do usuário
let tarefasAdicionadas = ["tarefa1", "tarefa2", "tarefa3"]; // Substitua por suas próprias tarefas

// Adicionando as três tarefas
for (let i = 0; i < 3; i++) {
    tarefas.push(tarefasAdicionadas[i]);
}

// Remoção da segunda tarefa (índice 1)
tarefas.splice(1, 1);

// Adicionando "ligar para o médico" ao final da lista
tarefas.push("ligar para o médico");

// Imprimindo a lista de tarefas atualizada
console.log("Lista de Tarefas Atualizada:", tarefas);

