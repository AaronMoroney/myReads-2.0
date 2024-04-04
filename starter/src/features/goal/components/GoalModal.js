
import '../../../css/App.css';

const GoalModal = ({setIsEditing, setBookGoal, handleSaveGoalSettings, bookGoal}) => {
    const  handleCloseEdit = () => {
        setIsEditing(false);
    };
    const increaseGoal = () => {
        setBookGoal(prevgoal => prevgoal + 1)
    }
    const decreaseGoal = () => {
        setBookGoal(prevgoal => prevgoal - 1)
    }

    return (
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
                        onClick={handleSaveGoalSettings}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GoalModal