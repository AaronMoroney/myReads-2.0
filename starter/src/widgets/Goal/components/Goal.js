import { useState, useContext, useEffect } from 'react';

import '../../../css/App.css';
import { SelectorContext } from '../../../shared/context/SelectorContext';
import { GoalModal } from '../../../features/goal';
import { ProgressBar } from '../../../features/goal';
import { GoalHeader } from '../../../features/goal';
import { Achieved } from '../../../features/goal';
import { getFromLocalStorage, calculateProgress } from '../helpers/goal';

const Goal = () => {
    const [editing, setIsEditing] = useState(false);
    const [bookGoal, setBookGoal] = useState(getFromLocalStorage());
    const [achievedValue, setAchievedValue] = useState(0)

    const { shelfState } = useContext(SelectorContext);
    
    const value = calculateProgress(shelfState.read, bookGoal);

    const handleOpenEdit = () => {
        setIsEditing(true);
    };
    
    const handleSaveGoalSettings = () => {
        localStorage.setItem('goal', bookGoal);
        setAchievedValue(value);
        setIsEditing(false); 
    }

    useEffect(() => {
        setAchievedValue(value);
    }, [value]);
    
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
                <Achieved 
                    achievedValue={achievedValue}
                />
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