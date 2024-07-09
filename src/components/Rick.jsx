import useFetchCharacters from '../hooks/useFecthCharacters';


const Rick = () => {

    const {character, getCharacter, page, increasePage, decreasePage} = useFetchCharacters()
    const urlRick = `https://rickandmortyapi.com/api/character/${page}`;
    getCharacter(urlRick)
    return (
        <div>
            <h2>Personaje de Rick y Morty</h2>
            <p>{character.name}</p>
            <img src={character.image} />
            <button onClick={decreasePage}>Anterior</button>
            <button onClick={increasePage}>Siguiente</button>
        </div>
    )
}

export default Rick