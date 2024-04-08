import { useEffect, useState, memo } from 'react';

import '../../../css/App.css'
import { update } from '../../../shared/api/BooksAPI.js';
import { useBookSelector } from '../hooks/useBookSelector.js'

const Selector = memo(({ book, shelf, showAlert }) => {
    const [ stageUpdate, setStageUpdate ] = useState('');

    const { onUpdateSelector, onRemoveSelector } = useBookSelector();

    const handleChange = async (e) => {
        setStageUpdate(e.target.value);
    };
    
    useEffect(() => {
        const updateShelf = async () => {
            try {
                //immediately updates
                onRemoveSelector(book, stageUpdate);
                onUpdateSelector(book, stageUpdate);
                //persists
                update(book, stageUpdate);
                if (showAlert) {
                    showAlert();
                }
            } catch (error) {
                console.error('Error updating shelf:', error);
            };
        }
        if (stageUpdate) {
            updateShelf();
        }      
    }, [book, stageUpdate, showAlert]);

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
}) 

export default Selector