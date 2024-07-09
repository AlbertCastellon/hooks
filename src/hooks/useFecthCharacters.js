import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchCharacters = () => {
    const [character, setCharacter] = useState({})
    const [page, setPage] = useState(1)
    const increasePage = () => setPage(page + 1)
    const decreasePage = () => page > 1 ? setPage(page - 1): setPage(page)
    const getCharacter = (url) => {
        useEffect(() => {
            const getData = async (url) => {
                const data = await axios.get(url)
                setCharacter(data.data)
            }
            getData(url)
        }, [])
    }

    return {character, getCharacter, page, increasePage, decreasePage}
}

export default useFetchCharacters