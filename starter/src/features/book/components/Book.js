import { Link } from 'react-router-dom'
import { memo, useContext } from 'react'

import '../../../css/App.css'
import { Selector } from '../../selector'
import { SelectorContext } from '../../../shared/context/SelectorContext'

const Book = memo(({ properties }) => {
    const { shelfState } = useContext(SelectorContext);
    console.log(shelfState);
    console.log(properties);
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
                       properties={ properties }
                       shelfState={ shelfState }
                    />
                </div>       
                </div>
                <div className="book-title">
                    { properties.title }
                </div>
                <div className="book-authors">
                    { properties.authors }
                </div>
            </div>
        </>
    )
});

export default Book