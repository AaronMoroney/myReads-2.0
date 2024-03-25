import Selector from './Selector'
const Book = () => {
    return (
        <>
            <div className="book">
                <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    // backgroundImage
                    }}
                >  
                </div>
                    <Selector />
                </div>
                <div className="book-title"></div>
                <div className="book-authors"></div>
            </div>
        </>
    )
}

export default Book