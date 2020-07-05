import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllPokemon, getAllMovies } from './services/pokemon-api';
import { Route, Link } from 'react-router-dom';
import PokemonPage from './pages/PokemonPage/PokemonPage'

class App extends Component {

  state = {
    pokemon: [],
    movies: []
  };

  async componentDidMount() {
    const pokemon = await getAllPokemon();
    const movies = await getAllMovies();
    console.log(pokemon.results);
    console.log(movies);
    this.setState( {pokemon: pokemon.results, movies: movies} )
  }

  getPokemon = (idx) => {
    return this.state.pokemon[idx]
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
        <Route path='/pokemon/:idx' render={(props) =>
          <PokemonPage 
            {...props}
            getPokemon={this.getPokemon}
          />
        }>
        </Route>  
      </div>
    )
  }

}

export default App;
