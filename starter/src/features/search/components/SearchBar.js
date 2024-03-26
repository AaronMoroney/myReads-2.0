import { Link } from 'react-router-dom'

import '../../../App.css'

const SearchBar = ({setQuery}) => {
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
      </div>
    </>
  )
}

export default SearchBar