import { useState, useEffect, useMemo} from 'react';

export const useBookShelves = (shelfState) => {
    const [read, setRead] = useState([]);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);

    useEffect(() => {
        setRead(shelfState?.filter(book => book.shelf === 'read'));
        setCurrentlyReading(shelfState?.filter(book => book.shelf === 'currentlyReading'));
        setWantToRead(shelfState?.filter(book => book.shelf === 'wantToRead'));
    }, [shelfState]);

    // const shelves = [read: read, currentlyReading, wantToRead];

    // console.log(shelves);

    return useMemo (
        () => ({
            read, 
            currentlyReading, 
            wantToRead, 
            setRead, 
            setCurrentlyReading, 
            setWantToRead, 
        }), 
        [ read, setRead, wantToRead, setWantToRead,  currentlyReading, setCurrentlyReading ]
    ) 
}