import TuneIcon from '@mui/icons-material/Tune'; //Icon library import - https://mui.com/material-ui/material-icons/?query=options

const GoalHeader = ({handleOpenEdit}) => {
    return (
        <>
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
        </>
    )
}

export default GoalHeader