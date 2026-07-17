/*se(codição == verdade){
    faça tal coisa    
}
*/
let media = 11
let autorizacao = 'sim'

if (autorizacao == 'sim'){
    console.log("Pode entrar")
}




if(media >= 6){
    console.log("Aprovado!")
    if(media == 10){
        console.log("Conceito é A")
    }else if(media >= 8 && media <10){
        console.log("Conceito é B")
    }
}else if(media < 6){
    console.log("Reprovado!")
}