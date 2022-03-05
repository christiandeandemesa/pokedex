function PokeInfo(props) {
    const {id, name, sprite, type1, type2, height, weight, hp, hpStat, atk, atkStat, def, defStat, spAtk, spAtkStat, spDef, spDefStat, spd, spdStat, ability1, ability2, move1, move2, move3, move4} = props;

    return (
        <div>
            <h1>Id: {id}</h1>
            <h1>Name: {name}</h1>
            <img src={sprite} alt='Pokemon'/>
            <h1>Type 1: {type1}</h1>
            <h1>Type 2: {type2}</h1>
            <h1>Height: {height}</h1>
            <h1>Weight: {weight}</h1>
            <h1>{hp} {hpStat}</h1>
            <h1>{atk} {atkStat}</h1>
            <h1>{def} {defStat}</h1>
            <h1>{spAtk} {spAtkStat}</h1>
            <h1>{spDef} {spDefStat}</h1>
            <h1>{spd} {spdStat}</h1>
            <h1>Ability 1: {ability1}</h1>
            <h1>{ability2 === '' ? '' : `Ability 1: ${ability1}`}</h1>
            <h1>Move 1: {move1}</h1>
            <h1>Move 2: {move2}</h1>
            <h1>Move 3: {move3}</h1>
            <h1>Move 4: {move4}</h1>
        </div>
    )
}

export default PokeInfo;