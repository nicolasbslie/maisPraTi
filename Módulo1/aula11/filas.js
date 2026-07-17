class Fila{
    constructor(){
        this.itens = []
    }

    //Adicionar um elemento ao final da fila
    enfileirar(elemento){
        this.itens.push(elemento)
    }

    //Imprime ps elementos da fila
    imprimirFila(){
        console.log(this.itens.join(' <- '))
    }

    //Remove e retorna o primeiro elemento da fila
    desenfileirar(){
        if(this.vazio()){
            return "A fila esta vazia!"
        }
        
        return this.itens.shift()
    }

    vazio(){
        return this.itens.length === 0
    }

    //Retorna o primeiro elemento sem remove-lo
    proximo(){
        if(this.vazio()){
            return "A fila esta vazia!"
        }
        
        return this.itens[0]
    }
}

const fila = new Fila()

fila.enfileirar("A")
fila.enfileirar("B")
fila.imprimirFila()
console.log(fila.desenfileirar())
console.log(fila.desenfileirar())
console.log(fila.desenfileirar())
console.log(fila.vazio())