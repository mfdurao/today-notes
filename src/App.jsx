import React, { Component } from "react";

import Header from "./components/Header/Header";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from './data/Categorias';
import Notas from './data/Notas';

import "./assets/App.css";
import "./assets/reset.css";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  render() {
    return (
      <div>
        <Header />
        <section className="conteudo">
          <FormularioCadastro 
          criarNota={this.notas.criarNota.bind(this.notas)}
          categorias={this.categorias} 
          />
          <main className="conteudo-principal">
            <ListaDeCategorias  
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategorias.bind(this.categorias)}
            />
            <ListaDeNotas
              apagarNota={this.notas.apagarNota.bind(this.notas)}
              notas={this.notas}
            />
          </main>
        </section>
      </div>
    );
  }
}

export default App;
