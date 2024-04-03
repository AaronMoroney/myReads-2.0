import { useContext, useEffect, useState } from 'react';

import '../../../App.css'
import { SelectorContext } from '../../../features/book/context/SelectorContext.js';
import { useBookSelector } from '../../../shared/hooks/useBookSelector'
import { getAll } from '../../../BooksAPI';

const Selector = ({ book, shelf }) => {
    const { setShelfState, shelfState } = useContext(SelectorContext);
    const { onUpdateSelector } = useBookSelector();

    const [stageUpdate, setStageUpdate] = useState('')

    const handleChange = async (e) => {
        setStageUpdate(e.target.value);
    };

    /*
    ** When I moved this to a custom hook location, it was causing several rerenders
    ** Refactor later after project completion
    */

    useEffect(() => {
        const updateShelf = async () => {
          try {
            await onUpdateSelector(book, stageUpdate);
            let result = await getAll();
            setShelfState(result); 
          } catch (error) {
            console.error('Error updating shelf:', error);
          }
        };
    
        if (stageUpdate) {
          updateShelf();
        }
    }, [book, stageUpdate, onUpdateSelector, setShelfState]);

    const matchingBook = shelfState.find(bookOnShelf => bookOnShelf.id === book.id);
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