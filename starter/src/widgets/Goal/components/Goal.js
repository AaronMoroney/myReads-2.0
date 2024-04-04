import { useState, useContext } from 'react';

import '../../../css/App.css';
import { SelectorContext } from '../../../shared/context/SelectorContext';
import { GoalModal } from '../../../features/goal';
import { ProgressBar } from '../../../features/goal';
import { GoalHeader } from '../../../features/goal';
import { getFromLocalStorage } from '../helpers/goal';

const Goal = () => {
    const [editing, setIsEditing] = useState(false);
    const [bookGoal, setBookGoal] = useState(getFromLocalStorage());

    const { shelfState} = useContext(SelectorContext);

    const read = shelfState?.filter(book => book.shelf === 'read');
    let value = bookGoal === 0 ? 0 : Math.min(100, Math.round(read.length / bookGoal * 100));

    //move into helpers
    const  handleOpenEdit = () => {
        setIsEditing(true);
    };
    
    const handleSaveGoalSettings = () => {
        localStorage.setItem('goal', bookGoal);
        setIsEditing(false);
    }
    
    return (
        <div className='bookshelf goal-background'>
            <GoalHeader
                handleOpenEdit={handleOpenEdit}
            />
            <div className='goal-container'>
                {editing && (
                    <GoalModal 
                        setIsEditing={setIsEditing}
                        setBookGoal={setBookGoal}
                        handleSaveGoalSettings={handleSaveGoalSettings}
                        bookGoal={bookGoal}
                    />
                )}
                <section className='progress-container'>
                    <ProgressBar 
                        value={value}
                        bookGoal={bookGoal}
                    />
                </section>
            </div>
        </div>    
    )
}

export default Goal