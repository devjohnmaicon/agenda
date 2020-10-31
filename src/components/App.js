import React, { Component } from 'react';
import '../App.css';
import ListaContatos from './ListaContatos'

class App extends Component {
  state = {
    contatos: [
      { "id": 0, "nome": "Jão", "insta": "@jao22" },
      { "id": 1, "nome": "Mario", "insta": "@SuperMario" },
      { "id": 2, "nome": "Vanessa", "insta": "@Vanessa15" },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Contatos</h1>
        <ListaContatos contatos={this.state.contatos} />
      </div>
    )
  }
}

export default App;
