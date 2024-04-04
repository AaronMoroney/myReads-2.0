import { useState, useContext } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'; //Library imports - https://www.npmjs.com/package/react-circular-progressbar
import 'react-circular-progressbar/dist/styles.css';
import TuneIcon from '@mui/icons-material/Tune'; //Icon library import - https://mui.com/material-ui/material-icons/?query=options

import '../../../App.css';
import { SelectorContext } from '../../book/context/SelectorContext';

const Goal = () => {
    const [editing, setIsEditing] = useState(false);

    const getFromLocalStorage = () => {
        let found = localStorage.getItem('goal');
        return found === null ? 0 : found;
    }

    const [bookGoal, setBookGoal] = useState(getFromLocalStorage());

    const { shelfState} = useContext(SelectorContext);
    const read  = shelfState?.filter(book => book.shelf === 'read');

    let value = bookGoal === 0 ? 0 : Math.min(100, Math.round(read.length / bookGoal * 100));

    const  handleOpenEdit = () => {
        setIsEditing(true);
    };
    const  handleCloseEdit = () => {
        setIsEditing(false);
    };
    const increaseGoal = () => {
        setBookGoal(prevgoal => prevgoal + 1)
    }
    const decreaseGoal = () => {
        setBookGoal(prevgoal => prevgoal - 1)
    }
    const saveGoalSettings = () => {
        localStorage.setItem('goal', bookGoal);
        setIsEditing(false);
    }
    
    return (
        <div className='bookshelf goal-background'>
            <header className='goal-header' >
                <div className='goal-header-text'>
                    <h2 className='header-title'> Reading Goals</h2>
                    <p>complete books, and see your stats soar!</p>
                </div>
                <button 
                    className='button'
                    onClick={handleOpenEdit}
                >
                    <TuneIcon />
                </button>
            </header>
            <div className='goal-container'>
            {editing && (
                <div className="modal-overlay" 
                    onClick={handleCloseEdit}
                >
                    <div 
                        className="modal-content" 
                        onClick={e => e.stopPropagation()}
                    >
                        <div>
                            <button onClick={decreaseGoal}>-</button>
                            <input
                                type="text"
                                aria-label='Book goal'
                                value={bookGoal}
                                readOnly
                            />
                            <button onClick={increaseGoal}>+</button>
                            <button
                                className="button-modal" 
                                onClick={saveGoalSettings}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
                <section className='progress-container'>
                    <CircularProgressbarWithChildren
                        value={value === Infinity ? 0 : value}
                        circleRatio={0.5}
                        styles={buildStyles({
                            pathColor: `rgba(248, 191, 48, ${100})`,
                            rotation: 5/8 + 1 / 8, //this shows the ratation of the progress bar
                            strokeLinecap: "round",
                            trailColor: "#eee"
                        })}
                    >
                        <div className='progress-bar-info'>
                            <h2 className='progress-bar-info-title'>{`${value === Infinity ? 0 : value}%`}</h2>
                            <p>{`completed of  ${bookGoal} book goal`}</p>
                        </div>
                    </CircularProgressbarWithChildren>
                </section>
            </div>
        </div>    
    )
}

export default Goal