import { Link } from 'react-router-dom'

import '../../../App.css'

const SearchBar = ({handleInputChange, query}) => {
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link 
            onClick={() => localStorage.removeItem('storedQuery')}
            to='/'
            className="close-search"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder={query ? query : "Search by title, author, or ISBN"}
              value={query ? query : ""}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar