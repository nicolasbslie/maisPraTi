/*
1 - Função sem parâmetros e sem retorno: Criar uma função simples que exiba uma
mensagem de saudação.
Instruções:
● Criar uma função chamada saudacao que não recebe parâmetros;
● Ex: A função deve exibir no console a mensagem "Olá, bem-vindo ao nosso sistema!";
● Chamar a função para que a saudação seja exibida.
*/
function saudacao() {
    console.log("Olá, bem-vindo ao nosso sistema!");
}
saudacao();


/*
2 - Função com parâmetros: Criar uma função que receba dois números como parâmetros
e retorne a soma, subtração, multiplicação e divisão desses números.
Instruções:
● Criar uma função chamada soma que recebe dois parâmetros (a e b);
● A função deve retornar a soma dos dois parâmetros;
● Chamar a função passando dois números como argumentos e exibir o resultado no
console.
*/

function soma(a, b) {
    return a + b;
}
const resultadoSoma = soma(5, 3);
console.log("A soma é: " + resultadoSoma);