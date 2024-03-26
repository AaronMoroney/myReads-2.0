import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import Book from '../../../shared/components/Book.js';
import { useBookShelf } from '../../../shared/hooks/useBookshelf.js';


const Search = () => {
  const { onSearch, setQuery, result, errorState, query  } = useBookShelf();

  useEffect(() => {
    onSearch(query);
  }, [onSearch, query]);


  /*
  * Need to capture the search query using ref to prevent unneccessary renrenders ✅
  * pass the search term into a useEffect hook & use that to query the backend ✅
  * the query will error out with a new charector, only works for single chars, why? 
  * loop over the results using map, or forEach? ✅
  * display it in the book component ✅
  * need to pass the selector value to the book component 
  */

  return (
      <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'
            className="close-search"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={e => setQuery(e.target.value)}
              type="text"
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
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
      </div>
    </>
  )
}

export default Search