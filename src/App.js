import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormularioCadastro from "./components/formularioCadastro";
import ListaDeCategorias from "./components/listaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/notas";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias}/>
          <ListaDeNotas 
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)}/>
        </main>
      </section>
    );
  }
}

export default App;