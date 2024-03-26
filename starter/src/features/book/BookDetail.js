import { useLocation } from 'react-router-dom';
import Selector from './Selector'

import '../../App.css'
import { useBookShelf } from '../../shared/hooks/useBookshelf.js'
import { useEffect } from 'react';

const BookDetail = () => {
    const location = useLocation();
    const { onGetSingle, single } = useBookShelf();

    const id = location.pathname.substring(7);

    useEffect(() => {
        onGetSingle(id);
    }, [onGetSingle, id]);

    return (
        <>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage: single.imageLinks ? `url("${single.imageLinks.smallThumbnail}")` : 'none'
                        }}
                    /> 
                    <div>
                        <Selector />
                    </div>       
                </div>
                <div className="book-title">
                    {single.title}
                </div>
                <div className="book-authors">
                    {single.authors}
                </div>
                {/* some other info */}
                <div className="book-authors">
                    {single.pageCount} pages
                </div>
                <div className="book-authors">
                    published by {single.publisher}
                </div>
            </div>    
        </>
    )
}

export default BookDetail