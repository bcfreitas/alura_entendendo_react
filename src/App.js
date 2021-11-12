import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormularioCadastro from "./components/formularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();
    this.notas = [];
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    console.log('nota criada: ' + titulo + ", " + texto);
    this.notas.push(novaNota);
    console.log(this.notas.length);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}/>
      </section>
    );
  }
}

export default App;