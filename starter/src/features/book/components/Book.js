import { Link } from 'react-router-dom'

import Selector from './Selector'
import '../../../App.css';

const Book = ({ properties }) => {
    return (
        <>
            <div className="book">
                <div className="book-top">
                <Link 
                    to={`/books/${properties.id}`} 
                    state={{properties}}
                >
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url("${properties.imageLinks.smallThumbnail}")`
                        }}
                    /> 
                </Link>
                <div>
                    <Selector />
                </div>       
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