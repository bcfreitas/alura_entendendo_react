export default class Categorias{
    constructor(){
        this.categorias = [];
        //a lista de inscritos sera privada (so convencao da comunidade, 
        //nao eh privado de verdade)
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }
    
    adicionarCategoria(novaCategoria){
        console.log(this.categorias);
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}