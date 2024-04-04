import { useState, useRef, useContext } from 'react';


import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'; //Library imports - https://www.npmjs.com/package/react-circular-progressbar
import 'react-circular-progressbar/dist/styles.css';
import TuneIcon from '@mui/icons-material/Tune'; //Icon library import - https://mui.com/material-ui/material-icons/?query=options

import '../../../App.css';
import { SelectorContext } from '../../book/context/SelectorContext';

const Goal = () => {
    const [editing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    const { shelfState} = useContext(SelectorContext);
    const read  = shelfState?.filter(book => book.shelf === 'read');
    console.log(read);

    let goal = 5
    let value =  read.length / goal  * 100;

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
                            pathColor: `rgba(248, 191, 48, ${100})`,
                            rotation: 5/8 + 1 / 8, //this shows the ratation of the progress bar
                            strokeLinecap: "round",
                            trailColor: "#eee"
                        })}
                    >
                        <div className='progress-bar-info'>
                            <h2 className='progress-bar-info-title'>{`${value}%`}</h2>
                            <p>{`completed of  ${goal} book goal`}</p>
                        </div>
                    </CircularProgressbarWithChildren>
                </section>
            </div>
        </div>    
    )
}

export default Goal