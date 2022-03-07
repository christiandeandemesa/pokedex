function PokeInfo(props) {

    // Destructures the keys in props, so I can use id instead of props.id.
    const {id, name, sprite, type1, type2, height, weight, hp, atk, def, spAtk, spDef, spd, ability1, ability2, move1, move2, move3, move4} = props;

    return (
        <div>
            {/* Example of using the destructured props. */}
            <h1>Id: {id}</h1>
            <h1>Name: {name}</h1>
            <img src={sprite} alt='Pokemon'/>
            <h1>Type 1: {type1}</h1>
            {/* If type2 is an empty string, show an empty string. If it is not an empty string, show the value of type2. */}
            <h1>{type2 === '' ? '' : `Type 2: ${type2}`}</h1>
            <h1>Height: {height}</h1>
            <h1>Weight: {weight}</h1>
            <h1>HP: {hp}</h1>
            <h1>Attack: {atk}</h1>
            <h1>Defense: {def}</h1>
            <h1>Special Attack {spAtk}</h1>
            <h1>Special Defense {spDef}</h1>
            <h1>Speed {spd}</h1>
            <h1>Ability 1: {ability1}</h1>
            {/* If ability2 is an empty string, show an empty string. If it is not an empty string, show the value of ability2. */}
            <h1>{ability2 === '' ? '' : `Ability 2: ${ability2}`}</h1>
            <h1>Move 1: {move1}</h1>
            <h1>Move 2: {move2}</h1>
            <h1>Move 3: {move3}</h1>
            <h1>Move 4: {move4}</h1>
        </div>
    )
}

export default PokeInfo;