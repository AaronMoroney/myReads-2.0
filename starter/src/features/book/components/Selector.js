import { useEffect } from 'react';

import '../../../App.css'
import { useBookSelector } from '../../../shared/hooks/useBookSelector'

const Selector = ({ book, shelf }) => {
    const { setStageUpdate, updateShelf } = useBookSelector();

    const handleChange = async (e) => {
        setStageUpdate(e.target.value);
    };

    useEffect(() => {
        updateShelf(book);
    },[ book, updateShelf ]);

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

export default Selector;

    // import { SelectorContext } from '../../../features/book/context/SelectorContext.js'; 

    // import { getAll } from '../../../BooksAPI.js';

    // const { setShelfState } = useContext(SelectorContext);

    // useEffect(() => {
    //     const updateShelf = async () => {
    //       try {
    //         await onUpdateSelector(book, stageUpdate);
    //         let result = await getAll();
    //         setShelfState(result); 
    //       } catch (error) {
    //         console.error('Error updating shelf:', error);
    //       }
    //     };
    
    //     if (stageUpdate) {
    //       updateShelf();
    //     }
    //   }, [book, stageUpdate, onUpdateSelector, setShelfState]); // Updated dependencies
