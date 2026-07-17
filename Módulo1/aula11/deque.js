class Deque{
    constructor(){
        this.itens = []
    }

    //Adicionar um item no inicio do Deque
    adicionarFrente(elemento){
        this.itens.unshift(elemento)
    }

    //Adicionar um item no final do deque
    adicionarFim(elemento){
        this.itens.push(elemento)
    }

    //Remove e retorna o elemento do inicio do deque
    removeFrente(){
        return this.itens.shift()
    }

    //Remove e retorna o elemento do fim do deque
    removeFim(){
        return this.itens.pop()
    }
}

const deque = new Deque()