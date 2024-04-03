import { useContext, useEffect, useState } from 'react';

import '../../../App.css'
import { SelectorContext } from '../context/SelectorContext.js';
import { useBookSelector } from '../../../shared/hooks/useBookSelector.js'
import { getAll } from '../../../BooksAPI.js';

const Selector = ({ book, shelf }) => {
    const { shelfState, setShelfState } = useContext(SelectorContext);
    const [ stageUpdate, setStageUpdate ] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { onUpdateSelector } = useBookSelector();

    const handleChange = async (e) => {
        setStageUpdate(e.target.value);
    };

    useEffect(() => {
        const updateShelf = async () => {
          try {
            setIsLoading(true); // Start loading
            await onUpdateSelector(book, stageUpdate);
            let result = await getAll();
            setShelfState(result); 
          } catch (error) {
            console.error('Error updating shelf:', error);
          } finally {
            setIsLoading(false)
          }
        };

        if (stageUpdate) {
          updateShelf();
        }
    }, [book, shelf, onUpdateSelector, stageUpdate, setShelfState]);
   
    const matchingBook = shelfState.find(bookOnShelf => bookOnShelf.id === book.id);

    if (isLoading) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    return (
        <>
            <div className="book-shelf-changer">
                <select 
                    value={matchingBook ? matchingBook.shelf : 'none'}
                    onChange={handleChange}
                >
                    <option value="none">
                        Move to...
                    </option>
                    <option value="currentlyReading">
                        Currently Reading
                    </option>
                    <option value="wantToRead">
                        Want to Read
                    </option>
                    <option value="read">
                        Read
                    </option>
                </select>
            </div>
        </>
    )
} 

export default Selector