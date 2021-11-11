import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormularioCadastro from "./components/formularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;