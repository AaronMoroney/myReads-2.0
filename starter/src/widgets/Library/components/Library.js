import { useState, useEffect, useContext} from 'react'

import '../../../App.css';
import { Shelf } from '../../../features/bookshelf'
import { ActionButton } from '../../../shared/ui';
import { SelectorContext } from '../../../features/book/context/SelectorContext.js';

const Library = () => {
    const { shelfState } = useContext(SelectorContext);

    const [read, setRead] = useState([]);
    const [current, setCurrent] = useState([]);
    const [want, setWant] = useState([]);

    useEffect(() => {
        setRead(shelfState?.filter(book => book.shelf === 'read'));
        setCurrent(shelfState?.filter(book => book.shelf === 'currentlyReading'));
        setWant(shelfState?.filter(book => book.shelf === 'wantToRead'));
    }, [shelfState]);

    return (
        <>
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <Shelf 
                        shelfName={'Currently Reading'}
                        properties={current}
                    />
                    <Shelf 
                        shelfName={'Want To read'}
                        properties={want}
                    />
                    <Shelf 
                        shelfName={'Read'}
                        properties={read}
                    />
                  </div>
                </div>
            </div> 
            <ActionButton />
        </>
    )
}

export default Library