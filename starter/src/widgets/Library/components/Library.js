import '../../../css/App.css';
import { Shelf } from '../../../features/bookshelf'
import { ActionButton } from '../../../shared/ui';

import { Goal } from '../../Goal';
import { useBookShelves } from '../hooks/useLibrary';

const Library = () => {
    const { read, want, current } = useBookShelves();

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
                        properties={current}
                    />
                    <Shelf 
                        shelfName={'Want To read'}
                        properties={want}
                    />
                    <Shelf 
                        shelfName={'Read'}
                        properties={read}
                    />
                    <div className='widget-container'>
                        <Goal />
                    </div>
                  </div>
                </div>
            </div> 
            <ActionButton />
        </>
    )
}

export default Library