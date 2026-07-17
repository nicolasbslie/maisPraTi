/*  
    Contagem de números pares: Usar o laço for para contar quantos números pares
    existem em um array de números.
*/

let numeros = [1, 5, 4, 8, 3, 10]
let quantidadePares = 0
let pares = []

for(let pos = 0; pos < numeros.length; pos++){
    if(numeros[pos] % 2 == 0){
        //quantidadePares = quantidadePares + 1
        quantidadePares++
        pares.push(numeros[pos])
    }
}

console.log(`Quantidade de números pares: ${quantidadePares}`)
console.log(`Pares: ${pares}`)