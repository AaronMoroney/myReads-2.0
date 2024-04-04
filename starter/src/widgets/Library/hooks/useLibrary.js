import { useState, useEffect, useContext} from 'react';

import { SelectorContext } from '../../../shared/context/SelectorContext';

export const useBookShelves = () => {
    // move into hooks 
    const { shelfState } = useContext(SelectorContext);

    const [read, setRead] = useState([]);
    const [current, setCurrent] = useState([]);
    const [want, setWant] = useState([]);

    useEffect(() => {
        setRead(shelfState?.filter(book => book.shelf === 'read'));
        setCurrent(shelfState?.filter(book => book.shelf === 'currentlyReading'));
        setWant(shelfState?.filter(book => book.shelf === 'wantToRead'));
    }, [shelfState]);

    return { read, current, want};
}