import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormularioCadastro from "./components/formularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  criarNota(titulo, texto){
    console.log('nota criada: ' + titulo + ", " + texto);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;