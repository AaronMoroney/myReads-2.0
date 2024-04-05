import { useContext, useEffect, useState, memo } from 'react';

import '../../../css/App.css'
import { SelectorContext } from '../../../shared/context/SelectorContext.js'
import { useBookSelector } from '../hooks/useBookSelector.js'
import Spinner from '../../../shared/ui/components/Spinner.js';

const Selector = memo(({ book, shelf ,showAlert }) => {
    const { read, wantToRead, currentlyReading } = useContext(SelectorContext);
    
    const [ stageUpdate, setStageUpdate ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const { onUpdateSelector } = useBookSelector();

    const handleChange = async (e) => {
        setStageUpdate(e.target.value);
    };
    
    useEffect(() => {
        const updateShelf = async () => {
          setIsLoading(true);
          try {
            await onUpdateSelector(book, stageUpdate);
            if (showAlert) {
                showAlert();
            }
          } catch (error) {
            console.error('Error updating shelf:', error);
          } finally {
            setIsLoading(false)
          }
        };
        if (stageUpdate) {
          updateShelf();
        }
        
    }, [book, stageUpdate, onUpdateSelector, showAlert ]);

    const shelves = [...wantToRead, ...read, ...currentlyReading];
    const matchingBook = shelves.find(bookOnShelf => bookOnShelf.id === book.id);

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
}) 

export default Selector