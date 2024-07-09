import useFetchCharacters from '../hooks/useFecthCharacters';

const Pokemon = () => {
    const {character, getCharacter, page, increasePage, decreasePage} = useFetchCharacters()
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${page}`;
    getCharacter(urlPokemon)
    return(
        <div>
            <h2>Personaje Pokemon</h2>
            <p>{character.name}</p>
            <img src={character.sprites?.other["official-artwork"].front_default} />
            <button onClick={decreasePage}>Anterior</button>
            <button onClick={increasePage}>Siguiente</button>
        </div>
    )
}

export default Pokemon