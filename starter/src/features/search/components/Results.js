import React from 'react'

import '../../../App.css'
import { Book } from '../../book'

const Results = ({result, errorState}) => {
  return (
    <>
      <div className="search-books-results">
        <ol className="books-grid">
          {errorState ? 
            <p>due to API Limitations, there are no results for your query</p> 
            : (result.map(book => 
              <Book 
                properties={book} 
                key={book.id}
              />
            ))
          }
        </ol>
      </div>
    </>
  )
}

export default Results