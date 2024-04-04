import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'; //Library imports - https://www.npmjs.com/package/react-circular-progressbar
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({value, bookGoal}) => {
    return (
        <>
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
        </>
    )
}

export default ProgressBar