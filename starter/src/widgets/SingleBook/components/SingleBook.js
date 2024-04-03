import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import '../../../App.css';
import { BookDetail } from '../../../features/book'
import { ActionButton } from '../../../shared/ui';

const SingleBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const properties = location.state?.properties;

  return (
    <>
      <div className="list-books">
        <Link 
          onClick={() => navigate(-1)} //goes to previous page
          className="close-search"
        >
          back
        </Link>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  properties && (
                    <BookDetail 
                      properties={properties}
                    />
                  ) 
                }
              </ol>
            </div>
          </div>
        </div>
      <ActionButton />
    </>
  )
}

export default SingleBook