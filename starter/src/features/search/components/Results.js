import React from 'react'

import '../../../css/App.css'
import { Book } from '../../book'

const Results = ({result, errorState}) => {
  return (
    <>
      <div className="search-books-results">
        <ol className="books-grid">
          {errorState ? 
            <p>due to API Limitations, there are no results for your query</p> 
            : (result.map((book) => {
              return (
                // reused book component
                <li key={ book.id }>
                  <Book 
                    properties={ book } 
                  />
                </li> 
              )
            }))
          }
        </ol>
      </div>
    </>
  )
}

export default Results