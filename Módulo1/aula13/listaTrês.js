const prompt = require("prompt-sync")

/*1. Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado.*/
const produto = {
    nome: "Camiseta",
    preco: 50,
    categoria: "Roupas",
    quantidadeEstoque: 100
};
for (let chave in produto) {
    console.log(`${chave}: ${produto[chave]}`);
}
produto.desconto = 0.1; // 10% de desconto
const precoFinal = produto.preco * (1 - produto.desconto);
console.log(`Preço final com desconto: R$${precoFinal.toFixed(2)}`);

/*2. Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa).*/
const personagem1 = {
    nome: "Guerreiro",
    vida: 100,
    ataque: 67,
    defesa: 80
}

const personagem2 = {
    nome: "Mago",
    vida: 70,
    ataque: 80,
    defesa: 85
}

console.log("Personagem 1:");
for (let chave in personagem1) {
    console.log(`${chave}: ${personagem1[chave]}`);
}
console.log("\nPersonagem 2:");
for (let chave in personagem2) {
    console.log(`${chave}: ${personagem2[chave]}`);
}
const poderTotal1 = personagem1.vida + personagem1.ataque + personagem1.defesa;
const poderTotal2 = personagem2.vida + personagem2.ataque + personagem2.defesa;
if (poderTotal1 > poderTotal2) {
    console.log(`\n${personagem1.nome} tem maior poder total (${poderTotal1})`);
} else if (poderTotal2 > poderTotal1) {
    console.log(`\n${personagem2.nome} tem maior poder total (${poderTotal2})`);
} else {
    console.log("\nAmbos os personagens têm o mesmo poder total");
}

/*3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%.*/
const funcionario = {
    nome: "Cléberson",
    cargo: "Caixa",
    salario: 2000,
    anosDeExperiencia: 1
}

for(let chave in funcionario){
    console.log(`${chave}: ${funcionario[chave]}`)
}

if(funcionario.anosDeExperiencia <= 2){
    console.log(`Sálario normal: ${funcionario.salario}`)
    const bonusSalarial = funcionario.salario * 0.05
    console.log(`Bônus salarial: ${bonusSalarial}`)
    const salarioComBonus = bonusSalarial + funcionario.salario
    console.log(`Sálario com bônus salarial: ${salarioComBonus}`)
} else if(funcionario.anosDeExperiencia >= 3 || funcionario.anosDeExperiencia <= 5){
    console.log(`Sálario normal: ${funcionario.salario}`)
    const bonusSalarial = funcionario.salario * 0.1
    console.log(`Bônus salarial: ${bonusSalarial}`)
    const salarioComBonus = bonusSalarial + funcionario.salario
    console.log(`Sálario com bônus salarial: ${salarioComBonus}`)
} else if(funcionario.anosDeExperiencia > 5){
    console.log(`Sálario normal: ${funcionario.salario}`)
    const bonusSalarial = funcionario.salario * 0.15
    console.log(`Bônus salarial: ${bonusSalarial}`)
    const salarioComBonus = bonusSalarial + funcionario.salario
    console.log(`Sálario com bônus salarial: ${salarioComBonus}`)
}

/*4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero.*/
const inventario = {
    espada: 1,
    pocao: 5,
    escudo: 2
}
console.log("Inventário completo:");
for(let chave in inventario){
    console.log(`${chave}: ${inventario[chave]}`)
}
const itemParaUsar = prompt("Informe um item para usar:");
if(inventario[itemParaUsar] > 0){
    inventario[itemParaUsar] -= 1;
    console.log(`Você usou um ${itemParaUsar}. Quantidade restante: ${inventario[itemParaUsar]}`);
} else {
    console.log("Item esgotado");
}

/*5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.*/
const orcamentoMensal = {
    alimentacao: {gasto: 200, orcamento: 350},
    transporte: {gasto: 1200, orcamento: 1000},
    lazer: {gasto: 600, orcamento: 600},
    saude: {gasto: 860, orcamento: 1000}
}
let saldoGeral = 0;
for(let categoria in orcamentoMensal){
    const gasto = orcamentoMensal[categoria].gasto;
    const orcamento = orcamentoMensal[categoria].orcamento;
    if(gasto <= orcamento){
        console.log(`${categoria}: Dentro do orçamento (Gasto: R$${gasto}, Orçamento: R$${orcamento})`);
    } else {
        console.log(`${categoria}: Acima do orçamento (Gasto: R$${gasto}, Orçamento: R$${orcamento})`);
    }
    saldoGeral += orcamento - gasto;
}
console.log(`Saldo geral do mês: R$${saldoGeral}`);

/*6. Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato.*/
const musicas = {
    musica1: {titulo: "Something Just Like This", artista: "The Chainsmokers, Coldplay", duracao: 247},
    musica2: {titulo: "Faded", artista: "Alan Walker", duracao: 212},
    musica3: {titulo: "Happier", artista: "Marshmello", duracao: 214}
}

for (let informacoes in musicas) {
    const nome = musicas[informacoes].titulo;
    const compositor = musicas[informacoes].artista;
    const duracao = musicas[informacoes].duracao;

    const minutos = parseInt(duracao / 60);
    let segundos = duracao % 60;

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    console.log(`${compositor} - ${nome} (${minutos}:${segundos})`);
}

let duracaoTotal = 0;

Object.values(musicas).forEach(musica => {
    duracaoTotal += musica.duracao;
});

const minutosTotal = parseInt(duracaoTotal / 60);
let segundosTotal = duracaoTotal % 60;

if (segundosTotal < 10) {
    segundosTotal = "0" + segundosTotal;
}

console.log(`Duração total: ${minutosTotal}:${segundosTotal}`);

/*7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados.*/
const alunos = {
    aluno1: {nome: "João", nota: 8},
    aluno2: {nome: "Maria", nota: 5},
    aluno3: {nome: "Pedro", nota: 6},
    aluno4: {nome: "Ana", nota: 9},
    aluno5: {nome: "Lucas", nota: 4},
    aluno6: {nome: "Carla", nota: 7}
}

/*8. Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque.*/
const produtos = [
    { nome: "Mouse", preco: 50, quantidade: 10 },
    { nome: "Teclado", preco: 120, quantidade: 5 },
    { nome: "Monitor", preco: 800, quantidade: 3 },
    { nome: "Headset", preco: 200, quantidade: 4 }
];

let valorTotalEstoque = 0;

produtos.forEach(produto => {
    let totalProduto = produto.preco * produto.quantidade;

    console.log(
        `${produto.nome} - R$${produto.preco} x ${produto.quantidade} = R$${totalProduto}`
    );

    valorTotalEstoque += totalProduto;
});

console.log(`Valor total do estoque: R$${valorTotalEstoque}`);

/*9. Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado".*/
const contatos = [
    {
        nome: "João",
        telefone: "99999-1111",
        email: "joao@email.com"
    },
    {
        nome: "Maria",
        telefone: "99999-2222",
        email: "maria@email.com"
    },
    {
        nome: "Pedro",
        telefone: "99999-3333",
        email: "pedro@email.com"
    }
];

console.log("Lista de contatos:");

contatos.forEach(contato => {
    console.log(
        `Nome: ${contato.nome} | Telefone: ${contato.telefone} | E-mail: ${contato.email}`
    );
});

let busca = "Maria";
let encontrado = false;

for (const contato of contatos) {
    if (contato.nome === busca) {
        console.log("\nContato encontrado:");
        console.log(contato);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Contato não encontrado.");
}

/*10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação.*/
const historico = [];

function visitar(pagina) {
    historico.push(pagina);
    console.log(`Visitando: ${pagina}`);
    paginaAtual();
}

function voltar() {
    if (historico.length > 1) {
        historico.pop();
        console.log("Voltando...");
    } else {
        console.log("Não é possível voltar.");
    }

    paginaAtual();
}

function paginaAtual() {
    console.log(`Página atual: ${historico[historico.length - 1]}`);
    console.log("----------------");
}

visitar("Google");
visitar("YouTube");
visitar("GitHub");
visitar("ChatGPT");

voltar();
voltar();

/*11. Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação.*/
const fila = [];

function chegarPaciente(nome) {
    fila.push(nome);
    console.log(`${nome} chegou.`);
    exibirFila();
}

function chamarProximo() {
    if (fila.length > 0) {
        const paciente = fila.shift();
        console.log(`${paciente} foi atendido.`);
    } else {
        console.log("Fila vazia.");
    }

    exibirFila();
}

function exibirFila() {
    console.log("Fila:", fila);
    console.log("----------------");
}

chegarPaciente("João");
chegarPaciente("Maria");
chegarPaciente("Pedro");
chegarPaciente("Ana");
chegarPaciente("Carlos");

chamarProximo();
chamarProximo();
chamarProximo();

/*12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois.*/
let lista = null;

function adicionar(tarefa) {
    const novoNo = {
        valor: tarefa,
        proximo: null
    };

    if (lista === null) {
        lista = novoNo;
    } else {
        let atual = lista;

        while (atual.proximo !== null) {
            atual = atual.proximo;
        }

        atual.proximo = novoNo;
    }
}

function remover(tarefa) {
    if (lista === null) return;

    if (lista.valor === tarefa) {
        lista = lista.proximo;
        return;
    }

    let atual = lista;

    while (atual.proximo !== null) {
        if (atual.proximo.valor === tarefa) {
            atual.proximo = atual.proximo.proximo;
            return;
        }

        atual = atual.proximo;
    }
}

function exibir() {
    let atual = lista;

    while (atual !== null) {
        console.log(atual.valor);
        atual = atual.proximo;
    }

    console.log("----------------");
}

adicionar("Estudar JavaScript");
adicionar("Fazer exercícios");
adicionar("Ler documentação");
adicionar("Enviar atividade");

console.log("Lista antes da remoção:");
exibir();

remover("Ler documentação");

console.log("Lista depois da remoção:");
exibir();