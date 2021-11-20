import React, { Component } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete.svg"
//alem da forma acima, tb podemos importar como ReactComponent. obs: inicial maiscula
import {ReactComponent as DeleteSVG2} from "../../assets/img/delete.svg"
class CardNota extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img src={deleteSVG} alt="delete" style={{display:'none'}}/>
          {/*quando importamos como ReactComponent, podemos usar da forma abaixo*/}
          <DeleteSVG2 onClick={this.apagar.bind(this)}/>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;