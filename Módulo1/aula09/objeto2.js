let alunos = [
    {
    nome: "Juliana",    //string
    idade: 25,          //number
    matriculado: true,  //boolean
    "notas dos alunos": [8, 8, 9],   //array
    "endereço":{          //objeto
        cidade: "Porto Alegre",
        estado: "RS"
        }
    },
    {
    nome: "Fernando",    //string
    idade: 40,          //number
    matriculado: true,  //boolean
    "notas dos alunos": [6, 8, 9],   //array
    "endereço":{          //objeto
        cidade: "Porto Alegre",
        estado: "RS"
        }
    }
]


for(let [chave, valor] of Object.entries(alunos)){
    console.log(`${valor.nome}`)
}