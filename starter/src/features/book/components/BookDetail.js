import { useState } from 'react';

import '../../../css/App.css'
import Alert from '../../alert/components/Alert';
import Selector from './Selector'

const BookDetail = ({ properties }) => {
    const [isVisible, setIsVisible] = useState('');

    const showAlert = () => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    }

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
                        <Selector 
                            book={properties}
                            shelf={properties.shelf}
                            onToggle={showAlert}
                        />
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
                <Alert 
                    title={properties.title}
                    shelf={properties.shelf}
                    isVisible={isVisible}
                />
            </div>    
        </>
    )
}

export default BookDetail