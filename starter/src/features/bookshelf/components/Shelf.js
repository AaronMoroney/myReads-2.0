//imports
import Book from '../../book/components/Book.js';

//dummy obj
const defaultBook = {
  title: 'book title', 
  authors: 'author', 
  imageLinks: {
    smallThumbnail: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  } 
}

const Shelf = ({shelfName}) => {
  console.log('shelf');
  return (
    <div>
      <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <Book 
                  properties={defaultBook}
                />
              </li>
            </ol>
          </div>
        </div> 
    </div>
  )
}

export default Shelf