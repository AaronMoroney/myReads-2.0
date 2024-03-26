import React from 'react'

import '../../../App.css'
import Book from '../../book/Book'

const Results = ({result, errorState, query}) => {
  return (
    <>
      <div className="search-books-results">
        <ol className="books-grid">
          {errorState ? 
          <p>due to API Limitations, there are no results for your '{query}' query</p> :
            (result.map(res => 
              <Book 
                properties={res} 
                key={res.id}
              />
            ))
          }
        </ol>
      </div>
    </>
  )
}

export default Results