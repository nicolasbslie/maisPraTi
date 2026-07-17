// const pilha = []

// pilha.push("Livro 1")
// pilha.push("Livro 2")
// pilha.push("Livro 3")

// console.log("Topo: ", pilha[pilha.length - 1])
// console.log("Removido: ", pilha.pop())
// console.log("Novo topo: ", pilha[pilha.length - 1])

class Pilha{
    constructor(){
        this.itens = []
    }

    push(elemento){
        this.itens.push(elemento)
    }

    pop(){
        if(this.isEmpty()){
            return "A pilha está vazia"
        }
    }

    isEmpty(){
        return this.itens.length === 0
    }

    print(){
        console.log(this.itens)
    }
}

const pilha = new Pilha()
pilha.push("A")
pilha.print()
pilha.pop()
pilha.print()