const Alert = ({ title, isVisible }) => {
    return (
        <>
            <div className={`alert ${isVisible ? 'show' : ''}`}>
                {` '${title}' has been successfully moved!`}
            </div>
        </>
    )
}

export default Alert