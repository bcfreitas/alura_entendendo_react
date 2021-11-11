import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(){
    super();
    this.titulo = "";
  }

  handleMudancaDeTitulo(evento){
    console.log(evento.target.value);
    this.titulo="";
  }

  render() {
    return (
      <form className="form-cadastro ">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaDeTitulo}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;