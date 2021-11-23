export default class Categorias{
    constructor(){
        this.categorias = ["cat1", "cat2"];
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
    }
}