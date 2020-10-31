import React, { Component } from 'react';

class ListaContatos extends Component {
    render() {
        return (
            <div>
                <h1>Lista Contatos</h1>
                <ul style={{listStyleType:'none', padding:'0'}}>
                    {this.props.contatos.map(contato => (
                        <li key={contato.id}>
                            <h4>{contato.nome}</h4>
                            <p>{contato.insta}</p>
                            <button>Excluir</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default ListaContatos;