import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(){
    super();
    this.titulo = "";
  }

  handleMudancaDeTitulo(evento){
    console.log(evento.target.value);
    this.titulo=evento.target.value;
  }

  render() {
    return (
      <form className="form-cadastro ">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          //quando atribuímos o método no onChange, o this interno do método
          //não funciona porque está fora do contexto do objeto. 
          //por isso é preciso usar o bind para atribuir o objeto presente ao contexto
          onChange={this.handleMudancaDeTitulo.bind(this)}
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