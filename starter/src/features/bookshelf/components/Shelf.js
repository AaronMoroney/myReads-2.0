//imports
import { Book } from '../../book/';

const Shelf = ({ shelfName, properties }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              properties.map(( book ) => {
                //each book will receive an obj w/ its properties
                return (
                  <li key={ book.id }>
                    <Book 
                      properties={ book }
                    />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div> 
    </div>
  )
}

export default Shelf