import { Link } from 'react-router-dom'

import Selector from './Selector'

import '../../App.css'
const Book = ({ properties }) => {
    return (
        <>
            <div className="book">
                <Link to={`/books/${properties.id}`}>
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url("${properties.imageLinks.smallThumbnail}")`
                            }}
                        /> 
                        <div>
                            <Selector />
                        </div>       
                    </div>
                </Link>
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