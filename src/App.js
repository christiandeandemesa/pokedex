import {useState, useEffect} from 'react';
import Axios from 'axios';
import PokeInfo from './components/PokeInfo';
import './App.scss';

function App() {

  const [pokeData, setPokeData] = useState([]);
  const [pokeName, setPokeName] = useState('magikarp');

  console.log(pokeData);
  console.log(typeof pokeData);

  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(res => {
        setPokeData([res.data]);
      })
  }, [pokeName]);

  const pokeElement = pokeData.map(pokemon => {
    return(
      <PokeInfo
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        sprite={pokemon.sprites.front_default}
        type1={pokemon.types[0].type.name}
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
      {pokeElement}
    </div>
  );
}

export default App;
