import React from 'react'

import '../../../App.css'
import { Book } from '../../book'

const Results = ({result, errorState}) => {
  

  /*
  ** read the state from the context
  ** if result exists in shelfState, 
  ** pass along the selection value as a prop
  ** use the value in the selector
  ** if not, default the value to not selected
  */

  return (
    <>
      <div className="search-books-results">
        <ol className="books-grid">
          {errorState ? 
          <p>due to API Limitations, there are no results for your query</p> 
          :
          (result.map(book => 
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