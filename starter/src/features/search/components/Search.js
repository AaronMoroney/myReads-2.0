import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

import Book from '../../../shared/components/Book.js';

const Search = () => {
    /*
    * Need to capture the search query using ref to prevent unneccessary renrenders
    * pass the search term into a useEffect hook & use that to query the backend
    * save results in state
    * loop over the results using map, or forEach? 
    * display it in the book component 
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
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">

            <ol className="books-grid">
              <Book />
            </ol>
          </div>
        </div>
        </>
    )
}

export default Search