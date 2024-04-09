import { memo } from 'react';

import { Book } from '../../book/';

const Shelf = memo(({ shelfName, properties }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              properties.map(( book ) => {
                //each book will receive its properties
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
});

export default Shelf