import React, {Component} from 'react';
import ListaDeNotas from './components/listaDeNotas';
import FormularioCadastro from './components/formularioCadastro';

class App extends Component{
  render(){
    return (
      //a funcao no arquivo jsx só pode retornar um elemento html pai
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
