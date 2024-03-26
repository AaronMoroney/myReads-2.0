import Shelf from '../../../features/bookshelf/components/Shelf.js'

const Library = () => {
    return (
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
    )
}

export default Library

