import { useContext } from 'react';

import '../../../css/App.css';
import { Goal } from '../../Goal';
import { Shelf } from '../../../features/bookshelf'
import { ActionButton } from '../../../shared/ui';
import { SelectorContext } from '../../../shared/context/SelectorContext';

const Library = () => {
    const { shelfState } = useContext(SelectorContext);
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
                            properties={shelfState.currentlyReading}
                        />
                        <Shelf 
                            shelfName={'Want To read'}
                            properties={shelfState.wantToRead}
                        />
                        <Shelf 
                            shelfName={'Read'}
                            properties={shelfState.read}
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