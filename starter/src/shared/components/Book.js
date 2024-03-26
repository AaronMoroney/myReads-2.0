import Selector from './Selector'
const Book = ({properties}) => {
    return (
        <>
            <div className="book">
                <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url("${properties.imageLinks.smallThumbnail}")`
                    }}
                >  
                </div>
                    <Selector />
                </div>
                <div className="book-title">
                    {properties.title}
                </div>
                <div className="book-authors">
                    {properties.authors}
                </div>
            </div>
        </>
    )
}

export default Book