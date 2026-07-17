/*Crie um programa com a idade do aluno e se ele possui autorizacao (responda com
sim ou nao).
O sistema deve mostrar:
- Acesso permitido, se o aluno tiver 14 anos ou mais e autorizacao = sim.
- Acesso permitido com responsavel, se o aluno tiver 12 ou 13 anos and autorizacao = sim.
- Acesso negado, se o aluno tiver menos de 12 anos or se nao tiver autorizacao
*/

let idade = 14
let autorizacao = "nao"

if(idade >= 14 && autorizacao == "sim"){
    console.log("Acesso Permitido")
}else if((idade >=12 && idade <=13) && autorizacao == "sim"){
    //if((idade == 12 || idade == 13) && autorizacao == "sim")
        console.log("Acesso Permitido com responsavel")
}else if(idade < 12 || autorizacao !== "sim"){
        console.log("Acesso Negado")
}