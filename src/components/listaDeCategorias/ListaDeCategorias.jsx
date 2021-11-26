import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]};
        this._novasCategorias = this._novasCategorias.bind(this);    }

    //este método é chamado pelo ciclo de vida objeto no React após a renderização completa
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    componentWillUnmount(){
        this.props.cageorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        console.log(categorias);
        this.setState({...this.state, categorias})
    }

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
                {this.state.categorias.map((categoria, index) => {
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