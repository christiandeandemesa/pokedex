// Imports useState for data manipulation.
import { useState } from 'react';
// Imports Axios for the API call.
import Axios from 'axios';
// Imports the PokeInfo component.
import PokeInfo from './components/PokeInfo';
// Imports this component's stylesheet.
import './App.scss';

function App() {

  // The pokeName state holds what the user inputs in the field.
  const [pokeName, setPokeName] = useState('');
  // The pokeData state holds the API data of the pokemon the user inputted.
  const [pokeData, setPokeData] = useState([]);

  // The async keyword guarantees the function always returns a promise.
  async function getPokemon() {
    // An empty array to hold the API data since it will come back in the form of an object, and we want it to be an array (line 15).
    const pokeDataArr = [];
    try {
      // This is the API call using string interpolation to get a specific pokemon (${pokeName}).
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
      /*
      The await keyword blocks the rest of the code from running until the following function (axios.get()) returns a promise.
      axios.get() performs a GET request on the given url.
      */
      const res = await Axios.get(url);
      /*
      You can see what the API returns by using: console.log(JSON.stringify(res));
      res.data is used because res is an object where data is the key, and all the information we want is the valuek. 
      */
      pokeDataArr.push(res.data);
      // Sets the pokeData state to be pokeDataArr.
      setPokeData(pokeDataArr);
    }
    // If the GET request fails (e.g. words that are not pokemon), logs the error in the console.
    catch (err) {
      console.log(err);
    }
  }

  // This function takes the event (e) from the form.
  function handleSubmit(e) {
    // Stops the component from re-rendering and refreshing the page.
    e.preventDefault();
    // Runs the getPokemon function.
    getPokemon();
  }

  // Creates a variable (pokemonElement) that maps over every object (pokemon) in the pokeData state's array.
  const pokeElement = pokeData.map(pokemon => {
    // pokeElement will render a PokeInfo component that passes props (e.g. sprite is the image of the pokemon from the API data).
    return (
      <PokeInfo
        // If you use a reusable component like this, they must have unique keys.
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        sprite={pokemon.sprites.front_default}
        type1={pokemon.types[0].type.name}
        /*
        If pokemon.types[1] exists in the API data, pass its data. If it does not exist, pass an empty string.
        Added this because some pokemon only have one ability, and it will break the PokeInfo component.
        */
        type2={pokemon.types[1] ? pokemon.types[1].type.name : ''}
        height={pokemon.height}
        weight={pokemon.weight}
        hp={pokemon.stats[0].stat.name}
        hpStat={pokemon.stats[0].base_stat}
        atk={pokemon.stats[1].stat.name}
        atkStat={pokemon.stats[1].base_stat}
        def={pokemon.stats[2].stat.name}
        defStat={pokemon.stats[2].base_stat}
        spAtk={pokemon.stats[3].stat.name}
        spAtkStat={pokemon.stats[3].base_stat}
        spDef={pokemon.stats[4].stat.name}
        spDefStat={pokemon.stats[4].base_stat}
        spd={pokemon.stats[5].stat.name}
        spdStat={pokemon.stats[5].base_stat}
        ability1={pokemon.abilities[0].ability.name}
        ability2={pokemon.abilities[1].ability.name}
        move1={pokemon.moves[0].move.name}
        move2={pokemon.moves[1].move.name}
        move3={pokemon.moves[2].move.name}
        move4={pokemon.moves[3].move.name}
      />
    )
  });

  return (
    <div className="App">
      {/* Runs the handleSubmit function when the button inside the form is clicked. */}
      <form onSubmit={handleSubmit}>
        <input
          // Defines the input as a single-line text field.
          type='text'
          // Only form elements with a name will have their value passed when the form is submitted.
          name='pokeName'
          // What will appear in the input if it is empty.
          placeholder='Pokemon Name'
          // Value is the pokeName state.
          value={pokeName}
          /*
          When the types or deletes a character, it sets the pokeName to be whatever is in the input.
          e is the event (typing or deleting), e.target is the target of the event (<input>), e.target.value is the value in the input tag, and we set it to lowercase 
          because the API call only works if the pokemon's name is all lowercase letters.
          */
          onChange={e => setPokeName(e.target.value.toLowerCase())}
        />
        <button>Search for Pokemon</button>
      </form>
      {/* This renders the above pokeElement variable which itself returns the PokeInfo component. */}
      {pokeElement}
    </div>
  );
}

// Exports this component, so it can be imported elsewhere.
export default App;