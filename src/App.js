import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormularioCadastro from "./components/formularioCadastro";
import ListaDeCategorias from "./components/listaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[],
      categorias:["trabalho", "esporte"]

    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    console.log('nota criada: ' + titulo + ", " + texto);
    //nao adiantaria chamar explicitamente
    //o metodo Render, pois é para uso do React
    // então, deve-se utilizar a propriedade state e alterá-la
    // desta forma o React chamará o render().
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }

    this.setState(novoEstado);

  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1)
    console.log("deletar");
    this.setState({notas:arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}/>
          <ListaDeNotas 
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}/>
        </main>
      </section>
    );
  }
}

export default App;