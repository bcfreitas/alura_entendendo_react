import React, { Component } from "react";
import CardNota from "../cardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

//o react da warning no start informando
//useless constructor, por isso comentado.
//  constructor(props){
//      super(props);
//  }

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;