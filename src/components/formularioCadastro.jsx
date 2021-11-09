import React, {Component}  from 'react';

export default class FormularioCadastro extends Component {
    render(){
        return(
            <form>
            <input type="text" placeholder="Titulo"/>
            <textarea placeholder="escreva sua nota.."></textarea>
            <input type="button" value="criar nota"/>
            </form>
        );
    }
}