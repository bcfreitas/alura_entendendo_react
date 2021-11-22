import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {
    _handleEventoInput(e){
        console.log(e);
        if(e.key === "Enter"){
            console.log("adicionar categoria");
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() { 
        return (
        /*todo componente precisa retornar um único elemento pai, com subelementos se quiser */
        <section className="lista-categorias">
            <ul className="lista-categorias_lista">
                {this.props.categorias.map((categoria, index) => {
                    return  <li key={index} className="lista-categorias_item">{categoria}</li>       
                })}
                
            </ul>

            <input type="text" 
            className="lista-categorias_input" 
            placeholder="Adicionar Categoria"
            onKeyUp={this._handleEventoInput.bind(this)}
            />
        </section>
        )
    }
}
 
export default ListaDeCategorias;