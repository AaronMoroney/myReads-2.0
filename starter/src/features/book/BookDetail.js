import { useLocation } from 'react-router-dom';
import Selector from './Selector'

import '../../App.css'

const BookDetail = () => {
    const location = useLocation();
    const properties = location.state?.properties;

    return (
        <>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${properties.imageLinks.smallThumbnail}")`
                        }}
                    /> 
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
                {/* some other info */}
                <div className="book-authors">
                    {properties.pageCount} pages
                </div>
                <div className="book-authors">
                    published by {properties.publisher}
                </div>
            </div>    
        </>
    )
}

export default BookDetail