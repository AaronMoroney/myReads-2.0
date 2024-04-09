import { memo,  useEffect, useState }  from 'react';

import '../../../css/App.css'
import { useBookSelector } from '../../selector/hooks/useBookSelector'

const Selector = memo(({ properties, showAlert }) => {
    const {  onUpdateShelf } = useBookSelector();
    const [ stageUpdate, setStageUpdate ] = useState(null);

    //set the new target shelf
    const handleChange = async(e) => {
        setStageUpdate(e.target.value);
    };
    
    useEffect(() => {
        if (stageUpdate) {
            onUpdateShelf(properties, stageUpdate, showAlert);
        }      
    }, [onUpdateShelf, properties, stageUpdate, showAlert])

    return (
        <>
            <div className="book-shelf-changer">
                <select 
                    value={ stageUpdate !== null ? stageUpdate : properties.shelf }
                    onChange={ handleChange }
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