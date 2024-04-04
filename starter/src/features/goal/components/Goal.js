import { useState, useRef } from 'react';
//library imports
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//Icon library import
import TuneIcon from '@mui/icons-material/Tune';

import '../../../App.css';
const Goal = () => {
    const [editing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    let goal = 5
    let value = 80

    const  handleEdit = () => {
        setIsEditing(true);
    };

    const saveGoalSettings = () => {
        localStorage.setItem('goal', inputRef);
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
                    onClick={handleEdit}
                >
                    <TuneIcon />
                </button>
            </header>
            <div className='goal-container'>
            { editing &&
                (
                    <input
                        inputRef={inputRef}
                        type="text"
                        label='So, how many books this year? 🤓'
                    >
                        <button
                            onClick={saveGoalSettings}
                        />
                    </input>
                ) 
            }
                <section className='progress-container'>
                    <CircularProgressbarWithChildren
                        value={value}
                        circleRatio={0.5}
                        styles={buildStyles({
                            pathColor: `rgba(248, 191, 48, ${value/ 100})`,
                            rotation: 5/8 + 1 / 8,
                            strokeLinecap: "round",
                            trailColor: "#eee"
                        })}
                    >
                        <div className='progress-bar-info'>
                            <h2 className='progress-bar-info-title'>{`${value}%`}</h2>
                            <p>{`of your ${goal} book goal`}</p>
                        </div>
                    </CircularProgressbarWithChildren>
                </section>
            </div>
        </div>    
    )
}

export default Goal