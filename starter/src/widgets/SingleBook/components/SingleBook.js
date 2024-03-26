import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import '../../../App.css';
import BookDetail from '../../../features/book/BookDetail'
import ActionButton from '../../../shared/ui/FAB/ActionButton';

export default function SingleBook() {
  const navigate = useNavigate();
  return (
    <>
      <div className="list-books">
        <Link 
          onClick={() => navigate(-1)}
          className="close-search"
        >
          back
        </Link>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="book"></div>
            <div className="bookshelf">
                <div className="bookshelf-books">
                <ol className="books-grid">
                  <BookDetail />
                </ol>
            </div>
          </div>
      </div>
      <ActionButton />
    </>
  )
}
