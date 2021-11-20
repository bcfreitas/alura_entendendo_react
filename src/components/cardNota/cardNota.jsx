import React, { Component } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete.svg"
//alem da forma acima, tb podemos importar como ReactComponent. obs: inicial maiscula
import {ReactComponent as DeleteSVG2} from "../../assets/img/delete.svg"
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img src={deleteSVG} alt="delete"/>
          {/*quando importamos como ReactComponent, podemos usar da forma abaixo*/}
          <DeleteSVG2/>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;