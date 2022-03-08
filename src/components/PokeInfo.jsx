// Imports the CSS module.
import styles from './PokeInfo.module.scss';

function PokeInfo(props) {

    // Destructures the keys in props, so I can use id instead of props.id.
    const { id, name, sprite, type1, type2, height, weight, hp, atk, def, spAtk, spDef, spd, ability1, ability2, move1, move2, move3, move4 } = props;

    return (
        // Example of an id for the CSS module.
        <div id={styles.info}>

            {/* This is the pokemon's image and basic information. */}
            <div id={styles.top_info}>
                <div id={styles.img}>
                    {/* Example of using the destructured props. */}
                    <img src={sprite} alt='Pokemon' />
                </div>
                <div id={styles.right_info}>
                    <div className={styles.small_section}>
                        <p>No. {id}</p>
                    </div>
                    <div className={styles.small_section}>
                        <p>{name}</p>
                    </div>
                    <div className={styles.small_section}>
                        {/* If type2 is an empty string, show an empty string. If it is not an empty string, show the value of type2. */}
                        <p>Type: {type1} {type2 === '' ? '' : `Type 2: ${type2}`}</p>
                    </div>
                    {/* Example of a class for the CSS module. */}
                    <div className={styles.small_section}>
                        <p>Height: {height} decimeters</p>
                    </div>
                    <div className={styles.small_section}>
                        <p>Weight: {weight} grams</p>
                    </div>
                </div>
            </div>

            {/* This is the pokemon's stats and moveset. */}
            <div id={styles.bot_info}>
                <div className={styles.large_section}>
                    <p>HP: {hp}</p>
                    <p>Speed: {spd}</p>
                </div>
                <div className={styles.large_section}>
                    <p>Attack: {atk}</p>
                    <p>Defense: {def}</p>
                </div>
                <div className={styles.large_section}>
                    <p>Special Attack: {spAtk}</p>
                    <p>Special Defense: {spDef}</p>
                </div>
                <div className={styles.large_section}>
                    {/* If ability2 is an empty string, show an empty string. If it is not an empty string, show the value of ability2. */}
                    <p>Ability: {ability1} {ability2 === '' ? '' : `or ${ability2}`}</p>
                </div>
                <div id={styles.moves}>
                    <div id={styles.move_title}>Sample Moveset</div>
                    <div id={styles.move_container}>
                        <div id={styles.top_move_container}>
                            <p>{move1}</p>
                            <p>{move2}</p>
                        </div>
                        <div id={styles.bot_move_container}>
                            <p>{move3}</p>
                            <p>{move4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeInfo;