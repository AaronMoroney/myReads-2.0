//imports
import Book from './Book'
const Shelf = ({shelfName}) => {
  return (
    <div>
      <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <Book />
              </li>
            </ol>
          </div>
        </div> 
    </div>
  )
}

export default Shelf