import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super();
    this.titulo = "";
  }

  //começar metodo com underline o torna privado
  _handleMudancaDeTitulo(evento){
    console.log(evento.target.value);
    this.titulo=evento.target.value;
  }

  _handleMudancaTexto(evento){
    //o this aqui é o formularioCadastro, e a variavel texto nao foi declarada antes (dinamismo js)
    this.texto=evento.target.value;
    this.jurubitao=evento.target.value+'IIIII';
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    console.log('nova nota cadastrada: ' + this.titulo + '. ' + this.texto + ',' + this.jurubitao);
    this.props.criarNota(this.titulo, this.texto);

  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          //quando atribuímos o método no onChange, o this interno do método
          //não funciona porque está fora do contexto do objeto. 
          //por isso é preciso usar o bind para atribuir o objeto presente ao contexto
          onChange={this._handleMudancaDeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;