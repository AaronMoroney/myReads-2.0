import { Link } from 'react-router-dom'

import '../../../App.css';
import { Selector  } from '../index';

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
                    <Selector 
                        book={properties}
                        shelf={properties.shelf}
                    />
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