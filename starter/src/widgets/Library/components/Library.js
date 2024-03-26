
import Shelf from '../../../features/bookshelf/components/Shelf.js'
import ActionButton from '../../../shared/ui/FAB/ActionButton.js';

import '../../../App.css';
const Library = () => {
    return (
        <>
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <Shelf 
                        shelfName={'Currently Reading'}
                    />
                    <Shelf 
                        shelfName={'Want To read'}
                    />
                    <Shelf 
                        shelfName={'Read'}
                    />
                  </div>
                </div>
            </div> 
            <ActionButton />
        </>
    )
}

export default Library

