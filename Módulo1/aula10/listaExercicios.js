const prompt = require("prompt-sync")();

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle(if/else).
console.log("----- Exercício 1 -----")
let numero = Number(prompt("Digite um número inteiro: "));

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

//2. Crie um programa que classifica a iddade de uma pessoa em categorias(criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle(if/else).
console.log("----- Exercício 2 -----")
let idade = Number(prompt("Digite a idade da pessoa: "));

if (idade <= 12) {
    console.log("A pessoa é uma criança.");
} else if (idade <= 20) {
    console.log("A pessoa é um adolescente.");
} else if (idade <= 65) {
    console.log("A pessoa é um adulto.");
} else {
    console.log("A pessoa é um idoso.");
}

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação" ou "Reprovado", utilizando if/else.
console.log("----- Exercício 3 -----")
let nota = Number(prompt("Digite a nota do aluno: "))

if(nota > 6){
    console.log("Aprovado")
} else if(nota > 4){
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
console.log("----- Exercício 4 -----")
console.log("===== MENU =====\n1. Pedir lanche\n2. Pedir Refri\n3. Pagar a conta\n0. Sair")
let opcao = Number(prompt("Selecione uma opção: "))

switch(opcao){
    case 0:
        console.log("Encerrando...")
        break
    case 1:
        console.log("Seu lanche está sendo preparado")
        break
    case 2:
        console.log("Sua bebida já vai vir para a mesa")
        break
    case 3:
        console.log("O garçom já vai vir com a conta para você pagar")
        break
    default:
        console.log("Opção inválida")
        break
}
// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
console.log("----- Exercício 5 -----")
let peso = Number(prompt("Digite seu peso em Kg: "))
let altura = Number(prompt("Digite sua altura em m: "))
let imc = peso / (altura*altura)

if(imc < 18.5){
    console.log("Abaixo do peso")
} else if(imc < 25){
    console.log("Peso normal")
} else if(imc < 30){
    console.log("Sobrepeso")
} else if(imc < 40){
    console.log("Obesidade")
}
// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// ● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
// A + B
// ● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// ● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// ● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
console.log("----- Exercício 6 -----")
let a = Number(prompt("Digite um lado do triângulo: "))
let b = Number(prompt("Digite um lado do triângulo: "))
let c = Number(prompt("Digite um lado do triângulo: "))

if(a < b + c && b < a + c && c < a + b){
    if(a == b || a == c || b == c){
        console.log("Triângulo Isóceles")
    } else if(a != b && b != c){
        console.log("Triângulo Escaleno")
    } else if(a == b && b == c){
        console.log("Triângulo Equilátero")
    }
} else {
    console.log("Não é um triângulo")
}
// 7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
console.log("----- Exercício 7 -----")
let soma = 0
let contador = 0
let numeroDecimal
do {
    numeroDecimal = Number(prompt("Digite um número decimal (0 para encerrar): "))
    if(numeroDecimal != 0){
        soma += numeroDecimal
        contador++
    }
} while (numeroDecimal != 0)

if(contador > 0){
    let media = soma / contador
    console.log("A média dos números digitados é: " + media)
} else {
    console.log("Nenhum número decimal foi digitado.")
}

// 8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
console.log("----- Exercício 8 -----")
let numeroFatorial = Number(prompt("Digite um número: "))
for(let i = 0; i < numeroFatorial; i ++){
    fatorial *= i
}

console.log(`O fatorial de ${numeroFatorial} é ${fatorial}`)
// 9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
console.log("----- Exercício 9 -----")
let a = 0;
let b = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(a);

    let proximo = a + b;
    a = b;
    b = proximo;
}

// 10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
console.log("----- Exercício 10 -----")
let nomes = [];

for (let i = 0; i < 7; i++) {
    let nome = prompt(`Digite o ${i + 1}º nome: `);
    nomes.push(nome);
}

console.log("Nomes na ordem inversa:");

for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}

// 11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.
console.log("----- Exercício 11 -----")
let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    nomes[i] = prompt(`Digite o nome da ${i + 1}ª pessoa: `);
    idades[i] = Number(prompt(`Digite a idade de ${nomes[i]}: `));
}

console.log("Pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`${nomes[i]} - ${idades[i]} anos`);
    }
}

// 12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
// ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
console.log("----- Exercício 12 -----")
function calcularPesoIdeal(alt, sexo) {
    if (sexo === "M") {
        return 72.7 * alt - 58;
    } else if (sexo === "F") {
        return 62.1 * alt - 44.7;
    } else {
        return null;
    }
}
let altura = Number(prompt("Digite a altura (em metros): "));
let sexo = prompt("Digite o sexo (M/F): ").toUpperCase();

let pesoIdeal = calcularPesoIdeal(altura, sexo);
if (pesoIdeal !== null) {
    console.log(`O peso ideal é ${pesoIdeal} kg.`);
} else {
    console.log("Sexo inválido!");
}
// 13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// ○ Matrícula:
// ○ Nome:
// ○ Salário bruto:
// ○ Dedução INSS:
// ○ Salário líquido:
// ○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
// redução do INSS).
console.log("----- Exercício 13 -----")
for (let i = 1; i <= 80; i++) {
    console.log(`\nFuncionário ${i}`);

    let matricula = prompt("Matrícula: ");
    let nome = prompt("Nome: ");
    let salarioBruto = Number(prompt("Salário bruto: R$ "));

    let inss = salarioBruto * 0.12;
    let salarioLiquido = salarioBruto - inss;

    console.log("\n----- CONTRACHEQUE -----");
    console.log(`Matrícula: ${matricula}`);
    console.log(`Nome: ${nome}`);
    console.log(`Salário bruto: R$ ${salarioBruto}`);
    console.log(`Dedução INSS: R$ ${inss}`);
    console.log(`Salário líquido: R$ ${salarioLiquido}`);
    console.log("------------------------");
}
// 14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$350,00.
console.log("----- Exercício 14 -----")
function pesquisarPopulacao() {
    let totalPessoas = 0;
    let somaSalarios = 0;
    let somaFilhos = 0;
    let maiorSalario = 0;
    let ate350 = 0;

    let continuar = "S";

    while (continuar === "S" || continuar === "s") {
        let salario = Number(prompt("Digite o salário: R$ "));
        let filhos = Number(prompt("Digite o número de filhos: "));

        totalPessoas++;
        somaSalarios += salario;
        somaFilhos += filhos;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            ate350++;
        }

        continuar = prompt("Deseja continuar? (S/N): ");
    }

    let mediaSalario = somaSalarios / totalPessoas;
    let mediaFilhos = somaFilhos / totalPessoas;
    let percentualAte350 = (ate350 / totalPessoas) * 100;

    return {
        mediaSalario,
        mediaFilhos,
        maiorSalario,
        percentualAte350
    };
}
// 15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.
console.log("----- Exercício 15 -----")
let matriz = [];

for (let i = 0; i < 7; i++) {
    matriz[i] = [];

    for (let j = 0; j < 7; j++) {
        if (i === j) {
            matriz[i][j] = 1;
        } else {
            matriz[i][j] = 0;
        }
    }
}

console.log("Matriz Identidade 7x7:\n");

for (let i = 0; i < 7; i++) {
    let linha = "";

    for (let j = 0; j < 7; j++) {
        linha += matriz[i][j] + " ";
    }

    console.log(linha);
}
// 16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.
console.log("----- Exercício 16 -----")
let M = [];
let C = [];

for (let i = 0; i < 6; i++) {
    M[i] = [];
    let negativos = 0;

    for (let j = 0; j < 8; j++) {
        M[i][j] = Number(
            prompt(`Digite o valor para M[${i}][${j}]: `)
        );

        if (M[i][j] < 0) {
            negativos++;
        }
    }

    C[i] = negativos;
}

console.log("\nVetor C (quantidade de números negativos por linha):");

for (let i = 0; i < 6; i++) {
    console.log(`Linha ${i + 1}: ${C[i]} negativos`);
}

// 17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.
console.log("----- Exercício 17 -----")
let pessoa = {
    nome: "João",
    idade: 25
};

console.log("Idade:", pessoa.idade);

pessoa.email = "joao@email.com";

console.log("\nObjeto atualizado:");
console.log(pessoa);

// 18. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.
console.log("----- Exercício 18 -----")
let dados = {
    nome: "Maria",
    idade: 30,
    notas: [8.5, 9.0, 7.8],
    hobbies: ["ler", "viajar", "correr"],
    cidade: "São Leopoldo",
    telefones: ["99999-9999", "98888-8888"],
    ativo: true
};

function obterArrays(obj) {
    let resultado = {};

    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }

    return resultado;
}

let apenasArrays = obterArrays(dados);

console.log("Propriedades que são arrays:");
console.log(apenasArrays);

// 19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.
console.log("----- Exercício 19 -----")
let obj1 = {
    nome: "João",
    idade: 20,
    cidade: "Porto Alegre"
};

let obj2 = {
    idade: 25,
    email: "joao@email.com"
};

function combinarObjetos(obj1, obj2) {
    let novoObjeto = {};

    for (let chave in obj1) {
        novoObjeto[chave] = obj1[chave];
    }

    for (let chave in obj2) {
        novoObjeto[chave] = obj2[chave];
    }

    return novoObjeto;
}

let resultado = combinarObjetos(obj1, obj2);

console.log(resultado);

// 20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.
console.log("----- Exercício 20 -----")
let palavras = [
    "maçã",
    "banana",
    "maçã",
    "laranja",
    "banana",
    "maçã"
];

function contarPalavras(array) {
    let contagem = {};

    for (let i = 0; i < array.length; i++) {
        let palavra = array[i];

        if (contagem[palavra]) {
            contagem[palavra]++;
        } else {
            contagem[palavra] = 1;
        }
    }

    return contagem;
}

let resultado = contarPalavras(palavras);

console.log(resultado);

// 21. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.
console.log("----- Exercício 21 -----")
let vendas = [
    { vendedor: "João", valor: 150 },
    { vendedor: "Maria", valor: 200 },
    { vendedor: "João", valor: 300 },
    { vendedor: "Carlos", valor: 100 },
    { vendedor: "Maria", valor: 250 }
];

function totalVendasPorVendedor(array) {
    let totais = {};

    for (let i = 0; i < array.length; i++) {
        let vendedor = array[i].vendedor;
        let valor = array[i].valor;

        if (totais[vendedor]) {
            totais[vendedor] += valor;
        } else {
            totais[vendedor] = valor;
        }
    }

    return totais;
}

let resultado = totalVendasPorVendedor(vendas);

console.log(resultado);