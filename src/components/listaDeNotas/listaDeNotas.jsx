import React, { Component } from "react";
import CardNota from "../cardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

  constructor(){
    super();
    this.state = {notas: []};
  }

  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas.bind(this));
  }

  _novasNotas(notas){
    this.setState({...this.state, notas});
  }
//o react da warning no start informando
//useless constructor, por isso comentado.
//  constructor(props){
//      super(props);
//  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota 
              titulo={nota.titulo} 
              texto={nota.texto} 
              indice={index}
              apagarNota = {this.props.apagarNota}
              categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;