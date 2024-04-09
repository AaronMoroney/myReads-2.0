import { memo,  useEffect, useState }  from 'react';

import '../../../css/App.css'
import { useBookSelector } from '../../selector/hooks/useBookSelector'

const Selector = memo(({ properties, showAlert, shelfState }) => {
    const {  onUpdateShelf } = useBookSelector();
    const [ stageUpdate, setStageUpdate ] = useState(null);
    const [ activeShelf, setActiveShelf ] = useState('');

    //set the new target shelf
    const handleChange = async(e) => {
        setStageUpdate(e.target.value);
    };
    
    useEffect(() => {
        if (stageUpdate) {
            onUpdateShelf(properties, stageUpdate, showAlert);
        }      
    }, [onUpdateShelf, properties, stageUpdate, showAlert])
 
    useEffect(() => {
        //set the active shelf 
        if(Array.isArray(shelfState[stageUpdate])) {
            setActiveShelf(shelfState[stageUpdate].find(stage => 
                stage.id === properties.id
            ));
        } 
        // else {
        //     setActiveShelf(shelfState)
        // }
    }, [shelfState, stageUpdate, properties.id])

    return (
        <>
            <div className="book-shelf-changer">
                <select 
                    value={ stageUpdate !== null ? activeShelf.shelf : properties.shelf }
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