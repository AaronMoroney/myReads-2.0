import { useContext, useEffect, useState } from 'react';

import '../../../App.css'
import { SelectorContext } from '../../../features/book/context/SelectorContext.js';
import { useBookSelector } from '../../../shared/hooks/useBookSelector'
import { getAll } from '../../../BooksAPI';

const Selector = ({ book, shelf }) => {
    const { setShelfState } = useContext(SelectorContext);
    const { onUpdateSelector } = useBookSelector();

    const [stageUpdate, setStageUpdate] = useState('')

    const handleChange = async (e) => {
        setStageUpdate(e.target.value);
    };

    useEffect(() => {
        const updateShelf = async () => {
          try {
            await onUpdateSelector(book, stageUpdate);
            let result = await getAll();
            setShelfState(result); // This updates the context and triggers a re-render
          } catch (error) {
            console.error('Error updating shelf:', error);
          }
        };
    
        if (stageUpdate) {
          updateShelf();
        }
      }, [book, stageUpdate, onUpdateSelector, setShelfState]); // Updated dependencies

    return (
        <>
            <div className="book-shelf-changer">
                <select 
                    value={shelf}
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

// const handleChange = async (e) => {
//     try {
//         const updatedBook = await onUpdateSelector(book, e.target.value);
//         console.log(updatedBook);
//     } catch (error) {
//         console.error('Error updating shelf:', error);
//     }
// };