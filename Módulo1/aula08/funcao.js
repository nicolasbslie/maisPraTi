//function nomeDaFuncao() {
    //Bloco de código

//}
//Mensaagem
function mensagem() {
    console.log("Olá, mundo!");
}
mensagem(); 

//Soma
function soma(a, b) {
    return a + b;
}

let resultado = soma(5, 3);
console.log("A soma é: " + resultado);

//Média
function calcularMedia(n1, n2) {
    let media = (n1 + n2) / 2;
    return media;
}
let mediaAluno = calcularMedia(7, 8);
console.log("A média do aluno é: " + mediaAluno);

//Saudação
function saudacao(nome) {
    console.log(`Olá, ${nome}! Bem-vindo(a)!`);
}
console.log("Iniciando o programa...");
saudacao("Nicolas");
console.log("Programa finalizado.");