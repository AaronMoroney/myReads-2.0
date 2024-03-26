import React from 'react'

import Book from '../../../shared/components/Book'

const Results = ({result, errorState, query}) => {
  return (
    <>
    {/* results component */}
    <div className="search-books-results">
          <ol className="books-grid">
            {errorState ? 
            <p>due to API Limitations, there are no results for your '{query}' query</p> :
            (result.map(res => 
              <Book 
              res={res} 
              key={res.id}/>
            ))
            }
          </ol>
        </div>
        {/* results component end */}
    </>
  )
}

export default Results