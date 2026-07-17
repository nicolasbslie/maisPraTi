/* 
    let objeto = {
        propriedade1: valor1,
        propriedade2: valor2
    }

*/
let aluno = {
    nome: "Juliana",    //string
    idade: 25,          //number
    matriculado: true,  //boolean
    "notas dos alunos": [8, 8, 9],   //array
    "endereço":{          //objeto
        cidade: "Porto Alegre",
        estado: "RS"
    }
}

console.log(aluno["idade"])
aluno["idade"] = 28
console.log(aluno["idade"])
let propriedade = "nome"
console.log(aluno[propriedade])


let produto = {}
console.log(produto)
produto.nome = "Camiseta"
produto.preco = 49.90
produto.quantidadeEstoque = 100
produto.descricao = "Camiseta de algodão"
console.log(produto)
produto.preco = 20.00
console.log(produto.preco)




let aluno = {
    nome: "Juliana",
    nota: 3,
}


const entradas = Object.entries(aluno)

console.log(entradas)