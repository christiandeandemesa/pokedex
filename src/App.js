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
    catch (err) {
      // If the GET request fails (e.g. words that are not pokemon), logs the error in the console.
      console.log(err);
      // Sets the pokeName state to an empty string to reset the input field.
      setPokeName('');
      // Creates an alert with the below message.
      alert('Pokemon species yet to be found!')
    }
  }

  // This function takes the event (e) from the form.
  function handleSubmit(e) {
    // Stops the component from re-rendering and refreshing the page.
    e.preventDefault();
    /*
    If the the pokeName's state does not have any whitespaces (\S is the opposite of \s which matches whitespaces), then run the getPokemon function.
    Added this because submitting the form with an empty string or a string with only whitespace, caused the form to disappear.
    */
    if (/\S/.test(pokeName)) getPokemon();
    // If the pokeName's state has at least one whitespace, set the pokeName's state to an empty string to reset the input field.
    else setPokeName('');
  }

  // Creates a variable (pokemonElement) that maps over every object (pokemon) in the pokeData state's array.
  const pokeElement = pokeData.map(pokemon => {
    // pokeElement will render a PokeInfo component that passes props (e.g. sprite is the image of the pokemon from the API data).
    return (
      <PokeInfo
        // If you use a reusable component like this, they must have unique keys.
        key={pokemon.id}
        id={pokemon.id}
        // Capitalizes the first letter of the name (e.g. water becomes Water).
        name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        sprite={pokemon.sprites.front_default}
        type1={pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}
        /*
        If pokemon.types[1] exists in the API data, pass its data. If it does not exist, pass an empty string.
        Added this because some pokemon only have one ability, and it will break the PokeInfo component.
        */
        type2={pokemon.types[1] ? pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1) : ''}
        height={pokemon.height}
        weight={pokemon.weight}
        hp={pokemon.stats[0].base_stat}
        atk={pokemon.stats[1].base_stat}
        def={pokemon.stats[2].base_stat}
        spAtk={pokemon.stats[3].base_stat}
        spDef={pokemon.stats[4].base_stat}
        spd={pokemon.stats[5].base_stat}
        // Converts some of the abilities' and moves' names to remove the hyphen and capitalize the words (e.g. hydro-pump becomes Hydro Pump).
        ability1={pokemon.abilities[0].ability.name.split('-').map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ')}
        ability2={pokemon.abilities[1] ? pokemon.abilities[1].ability.name.split('-').map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ') : ''}
        move1={pokemon.moves[0].move.name.split('-').map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ')}
        move2={pokemon.moves[1] ? pokemon.moves[1].move.name.split('-').map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ') : ''}
        move3={pokemon.moves[2] ? pokemon.moves[2].move.name.split('-').map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ') : ''}
        move4={pokemon.moves[3] ? pokemon.moves[3].move.name.split('-').map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ') : ''}
      />
    )
  });

  return (
    <div className="App">

      {/* This is the whole pokedex. */}
      <div id='pokedex'>

        {/* This is the top red cover. */}
        <div id='top-cover'>
          <div id='left-top'>
            <div id='top-left-outer-border'>
              <div id='top-left-inner-border'></div>
            </div>
          </div>
          <div id='mid-top'>
            <div id='top-half-circle-border'>
              <div id='top-half-circle'></div>
            </div>
          </div>
          <div id='right-top'></div>
        </div>

        {/* This is the blue screen. */}
        <div id='screen'>
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
            <button>Search</button>
          </form>
          {/* This renders the above pokeElement variable which itself returns the PokeInfo component. */}
          {pokeElement}
        </div>

        {/* This is the bottom red cover. */}
        <div id='bot-cover'>
          <div id='left-bot'>
            <div id='bot-left-outer-border'>
              <div id='bot-left-inner-border'></div>
            </div>
          </div>
          <div id='mid-bot'>
            <div id='bot-half-circle-border'>
              <div id='bot-half-circle'></div>
            </div>
          </div>
          <div id='right-bot'></div>
        </div>
      </div>
    </div>
  );
}

// Exports this component, so it can be imported elsewhere.
export default App;