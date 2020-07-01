import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllPokemon } from './services/pokemon-api';
import { Route, Link } from 'react-router-dom';

class App extends Component {

  state = {
    pokemon: []
  };

  async componentDidMount() {
    const pokemon = await getAllPokemon();
    console.log(pokemon.results);
    this.setState( {pokemon: pokemon.results} )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Pokemon Index</header>
        <Route exact path="/" render={()=>
          <section>
            {this.state.pokemon.map((pokemon, idx) =>
              <Link
                key={pokemon.name}
                to={`/pokemon/${idx + 1}`}
              >
                {pokemon.name}
              </Link>
            )}
          </section>

        }>

        </Route>
      
      
      
      
      
      </div>
    )
  }

}

export default App;
