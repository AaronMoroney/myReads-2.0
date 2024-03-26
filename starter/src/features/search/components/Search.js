import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import '../../../App.css'
import Results from './Results.js';
import { useBookShelf } from '../../../shared/hooks/useBookshelf.js';

const Search = () => {
  const { onSearch, setQuery, result, errorState, query  } = useBookShelf();

  useEffect(() => {
    onSearch(query);
  }, [onSearch, query]);
  
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
          <Results 
            query={query}
            result={result}
            errorState={errorState}
          />
      </div>
    </>
  )
}

export default Search