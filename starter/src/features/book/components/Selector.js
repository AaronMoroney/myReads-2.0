import { useContext, useEffect, useState } from 'react';

import '../../../css/App.css'
import { SelectorContext } from '../../../shared/context/SelectorContext.js'
import { useBookSelector } from '../../../shared/hooks/useBookSelector.js'
import { getAll } from '../../../shared/api/BooksAPI.js';
import Spinner from '../../../shared/ui/components/Spinner.js';

const Selector = ({ book, shelf, onToggle }) => {
    const { shelfState, setShelfState } = useContext(SelectorContext);
    const [ stageUpdate, setStageUpdate ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

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
            await setShelfState(result); 
            onToggle();
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
        return <Spinner/>; 
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

 // useEffect(() => {
    //     const updateShelf = async () => {
    //       try {
    //         //start loading state
    //         setIsLoading(true); 
    //         //updates
    //         await onUpdateSelector(book, stageUpdate);
    //         let result = await getAll();
    //         setShelfState(result); 
    //         //alert
    //         onToggle();
    //       } catch (error) {
    //         console.error('Error updating shelf:', error);
    //       } finally {
    //         //remove loading state
    //         setIsLoading(false)
    //       }
    //     };

    //     if (stageUpdate) {
    //       updateShelf();
    //     }
    // }, [book, shelf, onUpdateSelector, stageUpdate, setShelfState]);