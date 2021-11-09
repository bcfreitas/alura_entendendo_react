import React from 'react';
import ListaDeNotas from './components/listaDeNotas';

function App() {
  return (
    //a funcao no arquivo jsx só pode retornar um elemento html pai
    <section>
      <form>
        <input type="text" placeholder="Titulo"/>
        <textarea placeholder="escreva sua nota.."></textarea>
        <input type="button" value="criar nota"/>
        </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
